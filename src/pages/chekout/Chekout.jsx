import React from "react";
import styles from "./Chekout.module.css";

function CheckOut() {
  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        Account / My Account / Product / View Cart / <span>CheckOut</span>
      </nav>

      <h1 className={styles.mainTitle}>Billing Details</h1>

      <div className={styles.contentWrapper}>
        <form
          className={styles.billingForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">
              First Name<span>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" className={styles.inputField} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="address">
              Street Address<span>*</span>
            </label>
            <input
              type="text"
              id="address"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
            <input type="text" id="apartment" className={styles.inputField} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="city">
              Town/City<span>*</span>
            </label>
            <input
              type="text"
              id="city"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">
              Phone Number<span>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Email Address<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        <div className={styles.orderSummary}>
          <div className={styles.productList}>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <img src="/imgs/g27cq4-500x500 1.svg" alt="LCD Monitor" />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <img src="/imgs/g92-2-500x500 1.svg" alt="H1 Gamepad" />
                <span>H1 Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
          </div>

          <div className={styles.pricing}>
            <div className={styles.priceRow}>
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className={styles.priceRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={`${styles.priceRow} ${styles.total}`}>
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          <div className={styles.paymentMethods}>
            <div className={styles.methodItem}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  className={styles.radioInput}
                />
                <span>Bank</span>
              </label>
              <div className={styles.bankIcons}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                  width="35"
                  alt="Visa"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  width="35"
                  alt="MasterCard"
                />
              </div>
            </div>
            <div className={styles.methodItem}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  className={styles.radioInput}
                  defaultChecked
                />
                <span>Cash on delivery</span>
              </label>
            </div>
          </div>

          <div className={styles.couponWrapper}>
            <input
              type="text"
              placeholder="Coupon Code"
              className={styles.couponInput}
            />
            <button className={styles.applyBtn}>Apply Coupon</button>
          </div>

          <button className={styles.placeOrderBtn}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
