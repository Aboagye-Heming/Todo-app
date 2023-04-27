import styles from '../styles/style.module.css'

const FormInput = () => {
    return (
        <div className={styles.todoform}>
            <form>
                <input placeholder="Add Todo Item" className={styles.todoinput}>
                
                </input>
                <button className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
};

export default FormInput