import React from 'react';

function Preview(props) {
  const styles = {
    container: `flex flex-row max-w-[1368px] justify-evenly mx-auto relative top-[57px] `,
    preview_box: `flex-1 max-w-[900px] py-8 px-6 `,
    overview: ``,
    publish: ``,
  }

  return (
    <div className={styles.container}>
      <div className={styles.preview_box}>
        <div className={styles.overview}></div>
        <div className={styles.publish}></div>
      </div>
    </div>
  );
}

export default Preview;