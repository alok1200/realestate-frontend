import React, { useState } from 'react';
import styles from './TermsAndConditions.module.css';

const TermsAndConditions = ({ isOpen, setIsOpen }) => {
    const handleSubmit = () => {
        console.log("hemloo")
        setIsOpen(false)
    }
    return (
        <>
            {isOpen &&
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>Terms and Conditions</h1>
                        <p className={styles.text}>
                            <strong>1. Introduction</strong>
                            These terms and conditions govern your use of our real estate website (the "Website"). By accessing or using the Website, you agree to be bound by these terms and conditions. If you do not agree with any of these terms and conditions, you should not use the Website.
                        </p><p className={styles.text}>
                            <strong>2. Use of the Website</strong>
                            The Website is intended to provide a platform for sellers to list their properties and for buyers to contact sellers directly. We do not own, sell, or rent any properties listed on the Website. We are not responsible for any transactions or agreements that take place between buyers and sellers.
                        </p><p className={styles.text}>
                            <strong>3. Fees</strong>
                            As a condition of using the Website, sellers agree to pay us a commission of 2.5% of the sale price of the property, and buyers agree to pay us a commission of 2.5% of the purchase price of the property. In total, both the seller and the buyer will pay us a commission of 5% of the property's sale price.
                        </p><p className={styles.text}>
                            <strong>4. Disclaimers and Limitations of Liability</strong>
                            We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                        </p><p className={styles.text}>
                            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of the Website.
                        </p><p className={styles.text}>
                            <strong>5. Intellectual Property</strong>
                            All content and materials on the Website, including without limitation text, graphics, logos, images, and software, are the property of our company or our affiliates, licensors or suppliers and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, display, perform, publish, or create derivative works from any of the content or materials on the Website without our prior written permission.
                        </p><p className={styles.text}>
                            <strong>6. Governing Law and Jurisdiction</strong>
                            These terms and conditions shall be governed by and construed in accordance with the laws of [insert your jurisdiction]. Any dispute arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [insert your jurisdiction].
                        </p><p className={styles.text}>
                            <strong>7. Modifications</strong>
                            We reserve the right to modify these terms and conditions at any time. You should check these terms and conditions periodically for changes. By using the Website after we post any changes to these terms and conditions, you agree to accept those changes, whether or not you have reviewed them.
                        </p>
                        <div className={styles.btnWrapper}>
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default TermsAndConditions;
