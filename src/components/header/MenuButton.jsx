import React, {useState} from 'react'

export default function MenuButton(props) {
  const [open, setOpen] = useState(props.open || false);
  const [color] = useState(props.color || "black");

  const handleClick = () => {
    setOpen(!open);
    alert('clicked');
  };

  const styles = {
    container: {
      height: "45px",
      width: "45px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "6px",
    },
    line: {
      height: "2px",
      width: "20px",
      background: color,
      transition: "all 0.2s ease",
    },
    lineTop: {
      transform: open ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px",
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      transform: open ? "translateX(-16px)" : "none",
    },
    lineBottom: {
      transform: open ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container} onClick={props.onClick || handleClick}>
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
}
