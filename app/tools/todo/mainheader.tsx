import { MdPostAdd, MdChecklist } from 'react-icons/md';
import classes from './mainheader.module.css';
import { buttonPrimary } from '../../../appcomponents/styles';

export default function MainHeader({ onCreatePost }: { onCreatePost: () => void }) {
    return (
        <header className={classes.header}>
            <div className={classes.logoContainer}>
                <h1 className={classes.logo}>
                    <MdChecklist size={50} className={classes.icon} />
                    <span className={classes.titleText}>
                        NextUp
                        <span className={classes.slogan}>Organize your day, one todo at a time</span>
                    </span>
                </h1>

            </div>

            <button className={buttonPrimary} onClick={onCreatePost}>
                <MdPostAdd size={18} />
                New Todo Item
            </button>
        </header>

    );
}