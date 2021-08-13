import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h4">About</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" align="left">
            香川生まれ香川育ち．自然言語処理分野における日本語のテキスト平易化に関する研究をしています．
            <br />
            ユーザが安心，便利に利用できるサービスを提供できるフロントエンドエンジニアを目指しています．
            <br />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
