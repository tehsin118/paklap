import React from "react";
import "./web.scss";
import { toast } from "react-toastify";

const Web = () => {
  let a = 5;
  const connectButton = async () => {
    if ((a = 5)) {
      toast.error("click work");
    }
  };

  return (
    <div>
      <div>
        <h2>Account Details</h2>
        <div className="section">
          <div className="card">
            <div className="card-section">
              <h3>Wallet available</h3>
              <p>
                <strong> "No"</strong>
              </p>
            </div>
            <div className="card-section">
              <h3>Address</h3>
              <p>
                <strong>0</strong>
              </p>
            </div>
            <div className="card-section">
              <h3>Selected Network Chain ID</h3>

              <p>
                <strong>0</strong>
              </p>
            </div>
            <div className="card-section">
              <h3>Main Balance</h3>
              <p>
                <strong>0 BNB</strong>
              </p>
            </div>
            <button onClick={connectButton}>Connect Metamask</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
