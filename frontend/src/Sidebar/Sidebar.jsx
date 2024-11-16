import styles from "./Sidebar.module.css";

const getNoteTitle = (note) => {
    const maxTitleLength = 25;
    const returnIndex = note.text.indexOf("\n");
    let title = note.text.trim();
    const isTruncated =
        (returnIndex === -1 && title.length > maxTitleLength) ||
        returnIndex > maxTitleLength;
    if (isTruncated) {
        title = title.slice(0, maxTitleLength);
    }
    return (
        <div className={styles.title}>
            {title}
            {isTruncated ? <div className={styles.ellipsis}>…</div> : null}
        </div>
    );
};

const Sidebar = () => {
    // TODO: fetch from API
    const notes = [
        {
            text: "asdfasdf asdf asdf asdf asdf\nasdfasdflkjasdfl;jkasdf\nasdfasdf",
            createdAt: new Date(),
        },
    ];

    return (
        <div className={styles.container}>
            {notes.map((note, index) => {
                return <div key={`note-${index}`}>{getNoteTitle(note)}</div>;
            })}
        </div>
    );
};

export default Sidebar;
