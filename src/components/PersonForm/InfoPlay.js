const InfoPlay = ({ info }) => (
  <div className="info-play">
    <p>我的名字叫 { info.username }</p>
    <p>我喜欢 { info.hobby }</p>
  </div>
);

export default InfoPlay;
