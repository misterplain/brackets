const styles = {
    wrapper: (theme)=>({
        width: "100%",
        height: "50px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "grey",
        padding: "0 15px",
        margin: "0 0px",
        [theme.breakpoints.up("sm")]: {
            padding: "0 15px",
            margin: "0",
        },
        [theme.breakpoints.up("md")]: {
            padding: "0 30px",
            margin: "0",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "0 40px",
            margin: "0",
        },

    }),

    logoWrapper: (theme)=>({
        display: "flex",
        flexDirection: "row",
        // border: "1px solid red",
        alignItems: "center",
    }),
    logo: (theme)=>({
        width: "100%",
        fontSize: "1.5rem",
        color: "white",
    }),
    linksWrapper: (theme)=>({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",

    }),

    headerButton: (theme)=>({
        marginLeft: "20px",
        fontSize: "1.5rem",

    })
}

export default styles