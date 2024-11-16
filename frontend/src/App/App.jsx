import NoteInput from "../NoteInput/NoteInput";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./App.module.css";

// TODO:
// * disable ctrl + s (reflexive save button for ppl)

const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Sidebar />
                <NoteInput />
            </div>
        </div>
    );
};

export default App;
