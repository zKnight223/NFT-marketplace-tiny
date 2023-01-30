import { Pagination, PaginationItem, PaginationProps } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import { useStyles } from "./styles";

export default function DNPagination(props: PaginationProps) {
  const { isMobile } = useWindowSize();
  const classes = useStyles();

  return (
    <Pagination
      {...props}
      className={`${props.className} ${classes.root}`}
      shape="rounded"
      siblingCount={1}
      size={`${isMobile() ? "small" : "large"}` as PaginationProps["size"]}
      renderItem={(item) => (
        <PaginationItem className={classes.pagenationItem} {...item} />
      )}
    />
  );
}
