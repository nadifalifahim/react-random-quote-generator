const SocialButtons = (props) => {
  return (
    <>
      <a href={props.link} className="tweet-quote button" target="_blank">
        <i class={`fa fa-${props.platform}`}></i>
      </a>
    </>
  );
};

export default SocialButtons;
