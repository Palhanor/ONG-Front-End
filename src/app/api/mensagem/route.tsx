import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const htmlEmailTemplate = (
  name: string,
  title: string,
  email: string,
  message: string,
) => {
  return `<div style="border: 2px solid gray; padding: 30px;">
  <p><strong>Autor</strong>: ${name}</p>
  <p><strong>Título</strong>: ${title}</p>
  <p><strong>Remetente</strong>: ${email}</p>
  <p><strong>Mensagem</strong>: ${message}</p>
  </div>`
}

export async function POST(request: Request) {
  const { name, title, email, message } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD_AUTH,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: `${process.env.EMAIL}, escoladoreal@gmail.com`,
      subject: title,
      html: htmlEmailTemplate(name, title, email, message),
    })
    return NextResponse.json({ name, title, email, message }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
