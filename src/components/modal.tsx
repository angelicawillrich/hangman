import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-90 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-center bg-white p-5 rounded-lg relative w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-5 bg-none border-none text-lg cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
