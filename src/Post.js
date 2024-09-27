import React from "react";

function Post({ pfp, mrbeast, checkmark, com, share, like, view, description, username, info }) {
    return (
        <div style={styles.container2}>
            <div style={styles.container}>
                <div style={styles.profileContainer}>
                    <img src={pfp} style={styles.pfp} alt="" />
                    <div style={styles.textContainer}>
                        <div style={styles.usernameContainer}>
                            <span style={styles.username}>{username}</span>
                            <img src={checkmark} style={styles.checkmark} alt="" />
                            <span style={styles.Info}>{info}</span>
                        </div>
                        <span style={styles.description}>{description}
                        </span>
                    </div>
                </div>
                <img src={mrbeast} style={styles.mrbeast} alt="" />
                <div style={styles.iconsContainer}>
                    <div style={styles.iconWithText}>
                        <img src={com} style={styles.icon} alt="" />
                        <span style={styles.iconText}>13 tys.</span>
                    </div>
                    <div style={styles.iconWithText}>
                        <img src={share} style={styles.icon} alt="" />
                        <span style={styles.iconText}>35 tys.</span>
                    </div>
                    <div style={styles.iconWithText}>
                        <img src={like} style={styles.icon} alt="" />
                        <span style={styles.iconText}>448 tys.</span>
                    </div>
                    <div style={styles.iconWithText}>
                        <img src={view} style={styles.icon} alt="" />
                        <span style={styles.iconText}>45 mln</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container2: {
        display: "flex",
        justifyContent: "center",
        padding: "10px",
    },
    container: {
        width: "60%",
        border: "0.25px solid #555", 
        borderRadius: "10px",
        padding: "15px", 
    },
    profileContainer: {
        display: "flex",
        alignItems: "flex-start", 
        marginBottom: "10px", 
    },
    pfp: {
        borderRadius: "100%",
        height: "60px", 
        width: "60px",
    },
    textContainer: {
        marginLeft: "10px", 
        display: "flex",
        flexDirection: "column",
    },
    usernameContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "-5px", 
    },
    username: {
        fontSize: "18px",   
        fontWeight: "bold", 
        color: "#fff", 
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif", 
    },
    checkmark: {
        marginLeft: "5px",
        height: "20px",  
        width: "21px",
    },
    Info: {
        marginLeft: "10px",
        color: "#888",  
        fontSize: "14px", 
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif", 
    },
    description: {
        color: "#fff",
        fontSize: "16px", 
        marginTop: "5px",
        lineHeight: "1.4",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
    },
    mrbeast: {
        width: "80%",     
        borderRadius: "20px",
        marginTop: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
    },
    iconsContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
    },
    iconWithText: {
        display: "flex",
        alignItems: "center",
        margin: "0 30px",
    },
    icon: {
        height: "17px",
        width: "20px",
        marginRight: "5px",
    },
    iconText: {
        color: "#888",
        fontSize: "13px",
    },
};

export default Post;
