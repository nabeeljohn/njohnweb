import classes from './Modal.module.css';

export default function Modal(props: {onClose: () => void, children: React.ReactNode}) {
    return (
        <>
        <div className={classes.backdrop} onClick={props.onClose} />
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </>
    );
}