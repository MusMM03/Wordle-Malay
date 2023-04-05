import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
     
      <p className="text-sm text-gray-500">
        Meneka WORDLE dalam 6 percubaan. Selepas setiap tekaan, warna jubin akan berubah untuk menunjukkan seberapa dekat tekaan anda dengan perkataan.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="correct" />
        <Cell value="A" />
        <Cell value="K" />
        <Cell value="T" />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500">
        Huruf 'W' di dalam perkataan dan di posisi yang betul.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="A" />
        <Cell value="W" status="present" />
        <Cell value="A" />
        <Cell value="B" />
      </div>
      <p className="text-sm text-gray-500">
        Huruf 'W' di dalam perkataan tapi di posisi yang salah.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="A" status="absent"/>
        <Cell value="K" />
        <Cell value="A" status="absent" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500">
        Huruf 'A' tiada di dalam perkataan.
      </p>
    </BaseModal>
  )
}
