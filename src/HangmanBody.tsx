const HANGMAN_HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const HANGMAN_BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const HANGMAN_LEFT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "140px",
        right: '5px',
        rotate:'-30deg',
        transformOrigin:'right bottom'
      }}
    />
  );
  const HANGMAN_RIGHT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "140px",
        right: '-95px',
        rotate:'30deg',
        transformOrigin:'left bottom'
      }}
    />
  );

  const HANGMAN_RIGHT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: '-90px',
        rotate:'60deg',
        transformOrigin:'left bottom'
      }}
    />
  );

export function HangmanBody() {
  return (
    <div style={{ position: "relative" }}>
      {HANGMAN_HEAD}
      {HANGMAN_BODY}
      {HANGMAN_LEFT_ARM}
      {HANGMAN_RIGHT_ARM}
      {HANGMAN_RIGHT_LEG}
      <div
        style={{
          position: "absolute",
          height: "50px",
          width: "10px",
          background: "black",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "110px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
}
