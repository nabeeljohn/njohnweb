import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';

export default function MainHeader({onCreatePost}: {onCreatePost: () => void}) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                 NextUp - Todo List v1.0
            </h1>
            <p>
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18} />
                    Create New Todo
                </button>
            </p>
        </header>
    );
}