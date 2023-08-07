'use client'
import { UploadCloud } from 'lucide-react'
import { ComponentProps, ElementType } from 'react'

type FileRootProps = ComponentProps<'div'>

const FileRoot = (props: FileRootProps) => {
  return <div {...props} />
}

type FileTriggerProps = ComponentProps<'label'>

const FileTrigger = (props: FileTriggerProps) => {
  return (
    <label
      {...props}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500
    shadow-sm transition-colors duration-150 hover:border-violet-200  hover:bg-violet-25 hover:text-violet-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-700 " />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          {''}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}

type FilePreviewProps = ComponentProps<'div'> & {
  icon: ElementType
}

const FilePreview = ({ icon: Icon, ...props }: FilePreviewProps) => {
  return (
    <div
      className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50"
      {...props}
    >
      <Icon className="h-8 w-8 text-violet-500" />
    </div>
  )
}

type FileControlProps = ComponentProps<'input'>

const FileControl = (props: FileControlProps) => {
  return <input type="file" className="sr-only" {...props} />
}

export { FileRoot, FileTrigger, FilePreview, FileControl }
