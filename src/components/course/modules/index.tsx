'use client'

import { ILesson } from '@/interfaces/lesson'
import { Module as ModuleModel } from '@/model/Module'
import { useState } from 'react'
import Modal from '../modal'
import Module from './module'

interface ModulesProps {
  modules: ModuleModel[]
}

export default function Modules({ modules }: ModulesProps) {
  const [selectedLesson, setSelectedLesson] = useState<ILesson | null>(null)
  const handleSelection = (lesson: ILesson) => setSelectedLesson(lesson)
  const handleCloseSelection = () => setSelectedLesson(null)

  return (
    <main className="md:custom-mx-global mx-6 py-10">
      {modules.map((module, index) => (
        <Module
          key={module.id}
          module={module}
          position={index + 1}
          handleSelection={handleSelection}
        />
      ))}
      {selectedLesson && (
        <Modal
          selectedLesson={selectedLesson}
          handleCloseSelection={handleCloseSelection}
        />
      )}
    </main>
  )
}
