'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Title from '../../general/Title'
import Button from '../Button'
import Toast from './Toast'

interface contactForm {
  name: string
  email: string
  title: string
  message: string
}

const cleanState: contactForm = {
  name: '',
  email: '',
  title: '',
  message: '',
}

export default function Message() {
  const [state, setState] = useState<contactForm>(cleanState)
  const [sending, setSending] = useState<boolean>(false)
  const [toast, setToast] = useState({
    message: '',
    status: false,
    visible: false,
  })

  useEffect(() => {
    setTimeout(() => {
      setToast({
        message: '',
        status: false,
        visible: false,
      })
    }, 10000)
  }, [toast])

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_PATHNAME}/api/mensagem`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          origin: process.env.NEXT_PUBLIC_PATHNAME || '',
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      })
      setState(cleanState)
      setToast({
        message: 'E-mail enviado com sucesso',
        status: true,
        visible: true,
      })
    } catch (error) {
      setToast({
        message: 'Falha ao enviar e-mail',
        status: false,
        visible: true,
      })
    }
    setSending(false)
  }

  return (
    <section
      id="fale-conosco"
      className="custom-py-section"
      onSubmit={handleSubmit}
    >
      <Title icon="/icons/talk.svg">Fale Conosco</Title>
      <h3 className="h-60 w-full bg-talk-backgroud bg-cover bg-center px-10 py-12 pb-16 text-center text-xl font-bold text-white md:px-36 md:text-3xl">
        Se você tem alguma dúvida ou precisa de informações específicas, fique à
        vontade para perguntar.
      </h3>
      <form className="relative mx-auto -mt-10 grid w-5/6 grid-cols-2 gap-4 rounded-xl bg-white p-5 shadow-lg md:w-4/5 lg:-mt-20 lg:w-3/5 lg:rounded-lg lg:p-8">
        <label
          className="col-span-2 flex flex-col gap-2 md:col-span-1"
          htmlFor="name"
        >
          Nome
          <input
            className="rounded-sm bg-slate-200 p-2"
            value={state.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            required
          />
        </label>

        <label
          className="col-span-2 flex flex-col gap-2 md:col-span-1"
          htmlFor="email"
        >
          E-mail{' '}
          <input
            className="rounded-sm bg-slate-200 p-2"
            value={state.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            required
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2" htmlFor="title">
          Título
          <input
            className="rounded-sm bg-slate-200 p-2"
            value={state.title}
            onChange={handleChange}
            id="title"
            name="title"
            type="text"
            required
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2" htmlFor="message">
          Mensagem
          <textarea
            className="rounded-sm bg-slate-200 p-2"
            value={state.message}
            onChange={handleChange}
            name="message"
            id="message"
            cols={30}
            rows={8}
            required
          ></textarea>
        </label>
        <div className="col-span-2 my-3">
          <Button>{sending ? 'Enviando...' : 'Enviar Mensagem!'}</Button>
        </div>
      </form>
      {toast.visible && <Toast status={toast.status} message={toast.message} />}
    </section>
  )
}
