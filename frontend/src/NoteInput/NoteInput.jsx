import styles from "./NoteInput.module.css";

const NoteInput = () => {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                spellCheck="false"
                autoFocus
            />
        </div>
    );
};

export default NoteInput;
