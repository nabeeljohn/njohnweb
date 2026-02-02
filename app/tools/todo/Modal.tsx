import classes from './Modal.module.css';

export default function Modal(props: { children: React.ReactNode }) {
    return (
        <>
        <div className={classes.backdrop} />
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </>
    );
}