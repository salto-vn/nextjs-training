import React, { useReducer } from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";

export default function Home() {
  // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  // destructuring state and dispatch, initializing fileList to empty array
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Drag And Drop File Upload</title>
        <meta name="description" content="Nextjs drag and drop file upload" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Upload File</h3>
        {/* Pass state data and dispatch to the DropZone component */}
        <DropZone data={data} dispatch={dispatch} />
      </main>
    </div>
  );
}
