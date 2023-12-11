import React from "react";
import styles from "./Moderator7.module.css";

function Moderator7() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Box}>
          <div className={styles.box1}>
            <img src="./Images/1.jpg" alt="" />
            <p className={styles.fonts}>You</p>
          </div>

          <div className={styles.box1}>
            <img src="./Images/crown.jpg" alt="" />
            <p className={styles.fonts}>Moderator</p>
          </div>
        </div>

        <div className={styles.Box2}>
          <p className={styles.fonts}>Let's Play</p>

          <div className={styles.Boxes}>
            <div className={styles.box2}>
              <div>
                <p className={styles.fonts}>Voting</p>
              </div>

              <div className={`form-check form-switch ${styles.formSwitch}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>

            <div className={styles.box2}>
              <div>
                <p className={styles.fonts}>Day/Night</p>
              </div>

              <div className={`form-check form-switch ${styles.formSwitch}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Box3}>
          <p className={styles.fonts}>Chor:</p>

          <div className={styles.box3}>
            <div>
              <img src="./Images/7.jpg" alt="" />
              <p className={styles.fonts}>Aliyan</p>
            </div>

            <div>
              <img src="./Images/1.jpg" alt="" />
              <p className={styles.fonts}>Ahmar</p>
            </div>

            <div>
              <img src="./Images/5.jpg" alt="" />
              <p className={styles.fonts}>Talha</p>
            </div>
          </div>
        </div>

        <div className={styles.Box4}>
          <p className={styles.fonts}>Doctor:</p>

          <div className={styles.box4}>
            <div>
              <img src="./Images/4.jpg" alt="" />
              <p className={styles.fonts}>Hashir</p>
            </div>
          </div>
        </div>

        <div className={styles.Box5}>
          <p className={styles.fonts}>Police:</p>

          <div className={styles.box5}>
            <div>
              <img src="./Images/5.jpg" alt="" />
              <p className={styles.fonts}>Hammad</p>
            </div>
          </div>
        </div>

        <div className={styles.Box6}>
          <p className={styles.fonts}>Civilian:</p>

          <div className={styles.box6}>
            <div>
              <img src="./Images/6.jpg" alt="" />
              <p className={styles.fonts}>Danish</p>
            </div>

            <div>
              <img src="./Images/7.jpg" alt="" />
              <p className={styles.fonts}>Massab</p>
            </div>

            <div>
              <img src="./Images/8.jpg" alt="" />
              <p className={styles.fonts}>Sabir</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moderator7;
