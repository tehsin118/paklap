import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <div>
      <section className="profile">
        <h3>Profile</h3>

        <div className="edit-profile">
          <div className="back-btn">
            <a href="#">back</a>
          </div>

          <div className="profile-banner">
            <h1>upload image</h1>
            <img src="\profile\editBanner.png" alt="" />
            <button>
              <Icon
                icon="ic:outline-photo-camera"
                color="#444"
                width="48"
                height="48"
              />
            </button>
            <button>Edit Profile</button>
          </div>

          <div className="profile-header">
            <div className="left">
              <div className="user-dp">
                <Icon
                  icon="mdi:cloud-upload-outline"
                  color="#979797"
                  width="32"
                  height="32"
                />
                <h6>
                  Drop file to upload
                  <br />
                  Or <span>browse</span>
                </h6>
                <p>
                  Supported file formated: .jepg, .png, and .gif <br /> Max File
                  size is 10 MB
                </p>
                <label htmlFor="dp" style={{ zIndex: 3 }}></label>
                <input type="file" id="dp" accept=".jepg,png,.gif" />
                {/* onUploading dp following img will be shown */}
                <img
                  src=""
                  alt=""
                  className="profile-dp"
                  style={{ zIndex: 2 }}
                />
              </div>
              <div className="res-profile">
                <div className="user-details">
                  <div className="user-name">
                    <h6>Shan Jacks</h6>
                    <div className="user-address ">
                      <Icon
                        icon="mdi:ethereum"
                        color="#979797"
                        width="25"
                        height="20"
                        className="ico"
                      />
                      <p>0xD5…1234</p>
                      <img src="\profile\copy.svg" alt="" />
                    </div>
                    <div className="user-share">
                      <Icon
                        icon="mdi:like"
                        color="#000"
                        width="32"
                        height="32"
                        className="ico"
                      />
                      <Icon
                        icon="material-symbols:share-reviews"
                        color="#000"
                        width="32"
                        height="32"
                        className="ico"
                      />
                    </div>
                  </div>
                </div>
                <div className="followers">
                  <div>
                    <h3>101</h3>
                    <p>followers</p>
                  </div>
                  <div>
                    <h3>20</h3>
                    <p>Following</p>
                  </div>
                  <div>
                    <h3>20</h3>
                    <p>collections</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
                facilisis pharetra. Ipsum diam fames morbi. Laoreet nunc
                imperdiet pulvinar lacinia faucibus nibh dui.
              </p>
              <div className="social-ico">
                <a href="#" target="">
                  <Icon
                    icon="ant-design:twitter-circle-filled"
                    color="#000"
                    width="32"
                    height="32"
                    className="ico"
                  />
                </a>
                <a href="#" target="">
                  <Icon
                    icon="ic:baseline-facebook"
                    color="#000"
                    width="32"
                    height="32"
                    className="ico"
                  />
                </a>
                <a href="#" target="">
                  <Icon
                    icon="ic:baseline-telegram"
                    color="#000"
                    width="32"
                    height="32"
                    className="ico"
                  />
                </a>
                <a href="#" target="">
                  <Icon
                    icon="majesticons:link-circle"
                    color="#000"
                    width="32"
                    height="32"
                    className="ico"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
