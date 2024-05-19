import { useRef } from "react";

function useDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);


  const openDialog = () => {
    dialogRef.current?.showModal();
  };


  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return { openDialog, closeDialog, dialogRef };
}

export default useDialog;