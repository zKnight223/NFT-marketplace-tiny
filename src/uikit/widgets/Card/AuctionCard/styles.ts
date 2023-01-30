import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",

    // Card root
    textAlign: "left",
    width: 433,
    height: 650.64,
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      width: 276,
      height: 381,
      borderRadius: 12.75,
    },

    // Card media
    "& .MuiCardMedia-root": {
      position: "relative",
      width: "100%",
      height: 350,
      [theme.breakpoints.down("sm")]: {
        height: 174,
      },

      // Auction time remaining box
      "& .timeRemainingBox": {
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderRadius: 0,
        backgroundColor: "#0000001A",
        backdropFilter: "blur(23px)",
        padding: "15.34px 0px 27px 26px",
        [theme.breakpoints.down("sm")]: {
          padding: "9.78px 0px 17.69px 16.67px",
        },

        // Auction time line box
        "& .timelineBox": {
          position: "absolute",
          width: "100%",
          bottom: 0,
          left: 0,
          backgroundColor: "#C4C4C4",
          height: 6.52,
          [theme.breakpoints.down("sm")]: {
            backgroundColor: "#C4C4C4",
            height: 4.16,
          },

          // Auction timeline
          "& .timeline": {
            height: "100%",
            bottom: 0,

            // timeline colors
            "&.normal": {
              backgroundColor: "#00FF47",
            },
            "&.warning": {
              backgroundColor: "#FFE600",
            },
            "&.danger": {
              backgroundColor: "#FF4D00",
            },
          },
        },
      },

      // time feature
      "& .timeFeature": {
        fontSize: 20,
        lineHeight: "27.24px",
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
          fontSize: 13,
          lineHeight: "17px",
        },
        "&:not(:first-child):before": {
          content: '":"',
          marginLeft: 10.42,
          marginRight: 10.38,
          [theme.breakpoints.down("sm")]: {
            marginLeft: 6.29,
            marginRight: 6.44,
          },
        },
      },

      // time unit
      "& .timeUnit": {
        fontSize: 15,
        lineHeight: "20.43px",
        marginLeft: 2.34,
        [theme.breakpoints.down("sm")]: {
          fontSize: 9.56,
          lineHeight: "13.02px",
        },
      },
    },

    // Card Content
    "& .MuiCardContent-root": {
      color: "black",
      height: "calc(100% - 350px)",
      backgroundColor: "#DDDDDD",
      padding: "21px 31px 36px 21px",
      [theme.breakpoints.down("sm")]: {
        padding: "20.5px 19.5px 24.3px 19.5px",
        height: "calc(100% - 174px)",
      },

      // Card title
      "& .title": {
        fontSize: 25,
        fontWeight: 600,
        lineHeight: "34.05px",
        [theme.breakpoints.down("sm")]: {
          fontSize: 16,
          lineHeight: "21.79px",
        },
      },

      // NFT owner
      "& .owner": {
        fontSize: 15,
        lineHeight: "20.43px",
        marginLeft: 10.08,
        [theme.breakpoints.down("sm")]: {
          fontSize: 10,
          lineHeight: "13.62px",
          marginLeft: 7.26,
        },
      },

      // NFT owner img
      "& img": {
        width: 40,
        height: 40,
        [theme.breakpoints.down("sm")]: {
          width: 30,
          height: 30,
        },
      },

      // NFT price
      "& .price": {
        fontSize: 20,
        lineHeight: "27.24px",
        [theme.breakpoints.down("sm")]: {
          fontSize: 13,
          lineHeight: "17.7px",
        },
        "&:not(:first-child)": {
          marginLeft: 8.58,
          [theme.breakpoints.down("sm")]: {
            marginLeft: 3.93,
          },
        },
      },
    },
  },
}));
