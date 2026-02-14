import { modalBackdrop, modalDialog } from '../../../appcomponents/styles';

export default function Modal(props: {onClose: () => void, children: React.ReactNode}) {
    return (
        <>
            <div className={modalBackdrop} onClick={props.onClose} />
            <dialog open className={modalDialog}>
                {props.children}
            </dialog>
        </>
    );
}