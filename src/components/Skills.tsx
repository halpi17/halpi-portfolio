import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: "100%",
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={1}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h4">Skills</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Technologies</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">Python</Typography>
              <Typography color="textSecondary">
                研究・開発・競技プログラミング等，現在メインで使っている言語です．Python
                のフレームワークである Django
                を用いてブログアプリを作成しました．デプロイには Heroku
                を用いました．
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">C / C++</Typography>
              <Typography color="textSecondary">
                人生で初めて触れた言語が C++
                です．高校時代チームを組んで，一冊の本を参考に，ブロック崩しゲームや横スクロールゲームを作成しました．また，現在は学部2年生を対象としたC言語におけるプログラミング演習のお手伝いをするティーチングアシスタントに従事しています．
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                JavaScript / TypeScript / React
              </Typography>
              <Typography color="textSecondary">
                HTML, CSS, JavaScript を独学したのち，TypeScript,
                Reactを用いて本ポートフォリオサイトを作成しました．デプロイには
                GitHub Pages を用いました．
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">Java</Typography>
              <Typography color="textSecondary">
                学部時代，Java を用いたボードゲーム戦略の実装や対戦，LEGO
                ロボットによる走行競技大会の開発を行ないました．また，チームメンバーとともに漢字崩しゲームを作成しながら，チーム開発におけるコミュニケーションの大切さと開発の一連の流れを学びました．
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box p={1}>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h5">Pablications</Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <CardContent>
              <Typography>
                ・JSAI2021 - 2021年度 人工知能学会全国大会（第35回）
                <br />
                *西山 朋貴, 安藤 一秋,
                <strong>
                  子供向け日本語換言コーパス構築のための分館類似度計算法の評価
                </strong>
                , 4J3-GS-6f-04, 4pages, 2021
                <br />
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
