import React from "react";
import styles from "./Moderator8.module.css";

function Moderator8() {
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Box3}>
          <div className={styles.box3}>
            <div>
              <img src="./Images/2.jpg" alt="" />
              <p className={styles.fonts}>Aliyan</p>
            </div>

            <div>
              <p className={styles.fonts}>05</p>
            </div>

            <div>
              <button className={styles.kickout}>Kick out</button>
            </div>
          </div>
        </div>

        <div className={styles.Box4}>
          <div className={styles.box4}>
            <div>
              <img src="./Images/3.jpg" alt="" />
              <p className={styles.fonts}>Hashir</p>
            </div>

            <div>
              <p className={styles.fonts}>04</p>
            </div>
          </div>
        </div>

        <div className={styles.Box5}>
          <div className={styles.box5}>
            <div>
              <img src="./Images/4.jpg" alt="" />
              <p className={styles.fonts}>Hammad</p>
            </div>

            <div>
              <p className={styles.fonts}>03</p>
            </div>
          </div>
        </div>

        <div className={styles.Box6}>
          <div className={styles.box6}>
            <div className={styles.box06}>
              <div>
                <img src="./Images/4.jpg" alt="" />
                <p className={styles.fonts}>Danish</p>
              </div>
              <div>
                <p className={styles.fonts}>02</p>
              </div>
            </div>

            <div className={styles.box066}>
              <div>
                <img src="./Images/5.jpg" alt="" />
                <p className={styles.fonts}>Massab</p>
              </div>

              <div>
                <p className={styles.fonts}>03</p>
              </div>
            </div>

            <div className={styles.box06}>
              <div>
                <img src="./Images/6.jpg" alt="" />
                <p className={styles.fonts}>Sabir</p>
              </div>

              <div>
                <p className={styles.fonts}>03</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moderator8;
