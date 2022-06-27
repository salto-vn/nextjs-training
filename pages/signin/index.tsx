import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import styles from "styles/SignIn.module.scss"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Link from "next/link"
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert"

import type { ReactElement } from "react"
import Layout from "component/Layout"
import type { NextPageWithLayout } from "pages/_app"
import clsx from "clsx"
import Image from "next/image"
import { Grid } from "@mui/material"
import Head from "next/head"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const LoginPage: NextPageWithLayout = () => {
  const [checked, setChecked] = React.useState(true)
  const [buttonToggle, setButtonToggle] = useState("+")
  const [showSelection, setShowSelection] = useState("none")
  const [selectedValue, setSelectValue] = useState("")
  const [cssSelected, setCssSelected] = useState("unset")

  const handleChange = (event: any) => {
    setChecked(event.target.checked)
  }

  const selectValue = (value: any) => {
    setSelectValue(value)
    toggleSelection()
  }

  const toggleSelection = () => {
    if (buttonToggle === "+") {
      setButtonToggle("-")
      setCssSelected("1px solid rgb(223 176 64)")
    } else {
      setButtonToggle("+")
      setCssSelected("unset")
    }

    if (showSelection === "none") {
      setShowSelection("block")
    } else setShowSelection("none")
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Grid container spacing={2} className={styles.boxSignIn}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.wrapIcon}>
                <Image src="/artana.png" width="100%" height="100%" />
              </div>
              <h1 className={"text-center"}>ログイン</h1>
              <input
                type="text"
                placeholder="ユーザー名"
                className={clsx(styles.inputTextFiled, styles.normalInput)}
              />
              <input
                type="text"
                placeholder="パスワード"
                className={clsx(styles.inputTextFiled, styles.normalInput)}
              />

              <div className={styles.selection}>
                <Accordion className={styles.accordionWrapper}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>エリアA（リクエストエリアA）</Typography>
                  </AccordionSummary>
                  <div className={styles.blockHr}></div>
                  <span className={styles.label}>言うのは退屈</span>
                  <AccordionDetails className={styles.accordionDetails}  style={{ border: cssSelected }}>
                    <input
                      type="text"
                      placeholder="選択メインボード（少なくとも1つを選択）"
                      style={{
                        marginBottom: 0,
                        borderRadius: "unset",
                        width: "100%",
                        color: "grey",
                        fontWeight: "lighter",
                        fontSize: "16px",
                        backgroundColor: "#eaeaea"
                      }}
                      className={clsx(
                        styles.inputTextFiled,
                        styles.normalInput
                      )}
                      value={selectedValue}
                      readonly="readonly"
                      onClick={() => toggleSelection()}
                    />
                    <div
                      className={styles.buttonToggle}
                      onClick={() => toggleSelection()}
                    >
                      {buttonToggle}
                    </div>
                    <div
                      className={styles.listItem}
                      style={{ display: showSelection }}
                    >
                      <ul>
                        <li onClick={() => selectValue("選択メインボード A")}>
                          選択メインボード A
                        </li>
                        <li onClick={() => selectValue("選択メインボード B")}>
                          選択メインボード B
                        </li>
                        <li onClick={() => selectValue("選択メインボード C")}>
                          選択メインボード C
                        </li>
                        <li onClick={() => selectValue("選択メインボード D")}>
                          選択メインボード D
                        </li>
                        <li onClick={() => selectValue("選択メインボード E")}>
                          選択メインボード E
                        </li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <br />
              <br />
              <div className="w-100 text-center">
                <Button variant="contained" className={styles.signInButton}>
                  ログイン
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={clsx("w-100 text-center", styles.footer)}>
        <Grid item xs={12}>
          <footer>Copyright © ARTANA2022。</footer>
        </Grid>
      </Grid>
    </div>
  )
}

// LoginPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default LoginPage
