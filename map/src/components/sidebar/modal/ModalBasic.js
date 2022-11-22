import styles from "./modal.module.css"
import DetailModal from "./DetailModal"
import ShortModal from "./ShortModal"

export default function ModalBasic({ setModalOpen, modalType, userId, placeId }) {
    
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p> 
                {/* modalType에 따라 내용 다르게 */}
                { modalType==="DR" && <DetailModal userId={userId} placeId={placeId} />}
                { modalType==="SR" && <ShortModal userId={userId} placeId={placeId} />}
            </p>
        </div>
    );
}