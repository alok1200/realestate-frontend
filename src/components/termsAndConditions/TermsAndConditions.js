import { useEffect } from 'react';
import { termsAndConfitionData } from '../../DummyData';
import styles from './TermsAndConditions.module.css';

const TermsAndConditions = ({ setIsOpen }) => {
    const handleSubmit = () => {
        console.log("hemloo")
        setIsOpen(false)
    }

    useEffect(() => {
        console.log("inside terms and conditions")
    },[])
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <h1 className={styles.title}>Terms and Conditions</h1>
                    {termsAndConfitionData.map((tac, i) => {
                        return <p className={styles.text}><strong>{`${++i}. ${tac.title} `}</strong>{tac.desc}</p>
                    })}
                    <div className={styles.btnWrapper}>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;
