
import axios from 'axios';

export const applyJob = (data) => {
    return {
        type: "APPLY",
        payload: data
    }
}

export const apply_job = (data) => {
    return dispatch => {
        axios.post('http://localhost:4000/apply', data)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.stringify(res.data.messaage));
                }
                else {
                    let pr = new Promise((resolve, reject) => {
                        dispatch(applyJob(res.data));
                        resolve();
                    });
                    pr.then(() => {
                        dispatch(get_applyjob(data.user_id));
                    })
                }
            }).catch((err) => {
                return err;
            })

    }
}

export const getapply_data = (data) => {
    return {
        type: "GET_APPLY",
        payload: data
    }
}
export const get_applyjob = (userid) => {
    var url = `http://localhost:4000/apply/find_applies/${userid}`;
    return dispatch => {
        axios.get(url)
            .then((res) => {
                dispatch(getapply_data(res.data));
            }).catch((err) => {
                return err;
            })

    }
}
export const getapply_data_company = (data) => {
    return {
        type: "GET_APPLY_COMPANY",
        payload: data
    }
}

export const get_applyjob_company = (company) => {
    var url = `http://localhost:4000/applied/${company}`;
    return dispatch => {
        axios.get(url)
            .then((res) => {
                dispatch(getapply_data_company(res.data));
            }).catch((err) => {
                return err;
            })

    }
}
export const get_update = (data) => {
    return {
        type: "UPDATE_APPLY",
        payload: data
    }
}

export const update_apply = (data, company_name) => {
    return dispatch => {
        axios.put('http://localhost:4000/apply/put', data)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.parse(res.data.message));
                }
                else {
                    let pr = new Promise((resolve, reject) => {
                        dispatch(get_update(res.data));
                        resolve();
                    })
                    pr.then(() => {
                        dispatch(get_applyjob_company(company_name));
                    })
                }
            }).catch((err) => {
                return err;
            })
    }
}


export const getapply_data_userid = (data) => {
    return {
        type: "CHECK_APPLY",
        payload: data
    }
}

export const get_applyjob_user = (user_id) => {
    var url = `http://localhost:4000/apply/find_applies/${user_id}`;
    return dispatch => {
        axios.get(url)
            .then((res) => {
                dispatch(getapply_data_userid(res.data));
            }).catch((err) => {
                return err;
            })

    }
}