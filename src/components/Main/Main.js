import React, { Fragment } from "react";
import styles from "./Main.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MainMenu = ({ menuStyle, imgStyle, rightImg, descSrc = null }) => {
  return (
    <Fragment>
      {rightImg ? (
        <div className={cx("main-menu")} style={menuStyle}>
          {descSrc && <img src={descSrc} alt="desc" style={imgStyle} />}
        </div>
      ) : (
        <div className={cx("main-menu")} style={menuStyle}>
          {descSrc && <img src={descSrc} alt="desc" style={imgStyle} />}
        </div>
      )}
    </Fragment>
  );
};

const Main = () => (
  <div>
    <div className={cx("header-logo")}>
      <div className={cx("logo")}>
        <img
          src="http://www.ddingdong.net/include/img/user/main/img_logo_circle.png"
          alt="logo"
        />
      </div>
      <div className={cx("desc")}>
        <img
          src="http://www.ddingdong.net/include/img/user/main/dding_sec_text01.png"
          alt="desc"
        />
      </div>
      <div className={cx("download")}>
        <img
          src="http://www.ddingdong.net/include/img/user/main/btn_google_play.png"
          alt="android"
        />
        <img
          src="http://www.ddingdong.net/include/img/user/main/btn_app_store.png"
          alt="iphone"
        />
      </div>
    </div>
    <MainMenu
      menuStyle={{
        background: `url('http://www.ddingdong.net/include/img/user/main/dding_sec_bg02.jpg')`,
        backgroundSize: "52rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "33rem",
        backgroundColor: "white",
        width: "100%"
      }}
      imgStyle={{
        width: "20rem",
        height: "10rem",
        margin: "10rem",
        marginLeft: "20rem"
      }}
      rightImg
      imgSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_bg02.jpg"
      descSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_text02.png"
    />
    <MainMenu
      menuStyle={{
        background: `url("http://www.ddingdong.net/include/img/user/main/dding_sec_bg03.png")`,
        backgroundSize: "39rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10rem",
        width: "100%",

        backgroundColor: "#dceec7"
      }}
      imgStyle={{
        width: "20rem",
        height: "13rem",
        margin: "9rem",
        marginLeft: "55rem"
      }}
      imgSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_bg03.png"
      descSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_text03.png"
    />
    <MainMenu
      menuStyle={{
        background: `url('http://www.ddingdong.net/include/img/user/main/dding_sec_bg04.jpg')`,
        backgroundSize: "48rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40rem",
        backgroundColor: "#f0f4cd"
      }}
      imgStyle={{
        width: "18rem",
        height: "11rem",
        margin: "10rem",
        marginLeft: "20rem"
      }}
      rightImg
      imgSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_bg04.jpg"
      descSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_text04.png"
    />
    <div className={cx("pharse")}>
      <div className={cx("content")}>
        <div className={cx("left-content")}>
          <strong className={cx("strong-top")}>
            띵동맨이 사다드릴 내용을 상세히 작성해 주세요.
          </strong>
          <div className={cx("textarea")}>
            <textarea
              placeholder="나만 아는 맛집,자주가는 마트나 단골집 까지!&#10;원하는 것 모두
              다 사다드립니다!&#10;예)하동관에서 곰탕 2인분이랑 삼다수 2L 2개 사다주세요."
            />
          </div>
          <strong className={cx("strong-bottom")}>
            사진 등록은 최대 3매까지 가능합니다.
          </strong>
          <div className={cx("buttons")}>
            <div
              className={cx("button-box")}
              style={{
                height: "5rem",
                width: "7rem",
                backgroundColor: "white"
              }}
            >
              <img
                src="http://www.ddingdong.net/include/img/user/main/img_photo_del.png"
                alt="cancel"
              />
            </div>
            <div
              className={cx("button-box")}
              style={{
                height: "5rem",
                width: "7rem",
                backgroundColor: "white"
              }}
            >
              <img
                src="http://www.ddingdong.net/include/img/user/main/img_photo_add.png"
                alt="add"
              />
            </div>
            <div
              className={cx("button-box")}
              style={{
                height: "5rem",
                width: "7rem",
                backgroundColor: "white"
              }}
            >
              <img
                src="http://www.ddingdong.net/include/img/user/main/img_photo_add.png"
                alt="add"
              />
            </div>
          </div>

          <p>
            요금은 이동 거리 및 소요 시간, 지원 인력 등 여러 상황을<br />
            고려하여 고객센터에서 확인 후, 고객님과 직접 통화를 하<br /> 여최종
            결정됩니다.
          </p>
        </div>
        <div className={cx("desc")}>
          <img
            src="http://www.ddingdong.net/include/img/user/main/dding_sec_text05.png"
            alt="desc"
          />
        </div>
      </div>
    </div>
    <MainMenu
      menuStyle={{
        background: `url('http://www.ddingdong.net/include/img/user/main/dding_sec_bg06.jpg')`,
        backgroundSize: "55rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "33rem",
        backgroundColor: "#cadff3"
      }}
      imgStyle={{
        width: "22rem",
        height: "12rem",
        margin: "9rem",
        marginLeft: "20rem"
      }}
      rightImg
      imgSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_bg06.jpg"
      descSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_text06.png"
    />
    <MainMenu
      menuStyle={{
        height: "58rem",
        background: `url('http://www.ddingdong.net/include/img/user/main/dding_sec_bg07.jpg')`,
        backgroundSize: "64rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "16rem 4.8rem",
        backgroundColor: "#fbcf00"
      }}
      imgStyle={{
        width: "22rem",
        height: "12rem",
        margin: "9rem",
        marginLeft: "20rem"
      }}
      rightImg
      imgSrc="http://www.ddingdong.net/include/img/user/main/dding_sec_bg07.jpg"
    />
    <div className={cx("app-down")}>
      <h2>띵동앱으로 편리하게 이용하세요!</h2>
      <div className={cx("input-box")}>
        <input placeholder="앱 설치할 핸드폰 번호 입력해주세요" />
        <div className={cx("send-button")}>전송</div>
      </div>
      <div className={cx("download")}>
        <img
          src="http://www.ddingdong.net/include/img/user/main/btn_google_play2.png"
          alt="android"
        />
        <img
          src="http://www.ddingdong.net/include/img/user/main/btn_app_store2.png"
          alt="iphone"
        />
      </div>
    </div>
  </div>
);

export default Main;
