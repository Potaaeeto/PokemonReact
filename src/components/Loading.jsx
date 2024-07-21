import loading from "../assets/imgs/LoadingAnimationBall.gif";

const Loading = () => {
  return (
    <main className="loading">
      <img src={loading} alt="loading-spin" />
      <p>In loading process...</p>
    </main>
  );
};

export default Loading;
