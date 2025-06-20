import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean | null;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 z-50 transform transition-all duration-300 scale-95 animate-slide-up">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <IoIosClose onClick={onClose} className="h-6 w-6 cursor-pointer" />
        </div>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
