import React from 'react';

function MyCard(props) {
  return (
    <div style={styles.card}>
      <img src={props.image} alt={props.name} style={styles.image} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '2px solid #a11443ff',
    borderRadius: '15px',
    padding: '20px',
    width: '300px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.55)',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  }
};

export default MyCard;
