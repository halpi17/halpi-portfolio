import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: "100%",
  },
}));

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h4">Works</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <List className={classes.root}>
            <ListItem>
              <ListItemLink>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="ブロック崩し / 横スクロールゲーム"
                  secondary="高校時代1冊の参考書から，C++ で初めてプログラミング言語を用いたチーム開発をしました．また，作成したゲームは教育イベントの一環で地域の小学生に対してレクリエーションを行ないました．この開発経験からものづくりの楽しさ・人を喜ばせるやりがいを学びました．"
                />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="https://github.com/halpi17/django-blog">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="ブログアプリ"
                  secondary="Webや開発の一連の流れを掴みたいと思い，PythonのフレームワークであるDjangoを用いてブログアプリを制作しました．ブログアプリで必要な，投稿記事の閲覧やコメント，コメント返信機能，検索機能などを実装しています．また，記事を投稿する際や編集する際に少しでも楽にできるようにMarkdown形式対応になるよう実装し，これによりコードの記述も可能となっています．"
                />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="https://github.com/halpi17/halpi-portfolio">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="ポートフォリオサイト"
                  secondary="TypeScript と React を用いて本ポートフォリオサイトを作成しました．"
                />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="漢字版テトリス"
                  secondary="学部時代，講義の中で Java を用いてチーム開発したものがこの漢字版テトリスです．"
                />
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Works;
