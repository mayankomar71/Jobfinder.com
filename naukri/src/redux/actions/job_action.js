import axios from 'axios';
export const getDataSuccess = (data) => {
    return {
        type: "GET_DATA_FULFILLED",
        payload: data
    }
}

export const postJobSucess = (data) => {
    return {
        type: "POST_JOB",
        payload: data
    }
}
export const updateJobSucess = (data) => {
    return {
        type: "UPDATE_JOB",
        payload: data
    }
}

export const getjob_user = (pageNo,company) => {
    if (company) {
        return dispatch => {
            axios.get(`http://localhost:4000/jobs/companyjobs${'/'}${company}${'/'}${pageNo}`).then((res) => {
                localStorage.setItem('total_page', res.data.page)
                dispatch(getDataSuccess(res.data.message));
            }).catch((err) => {
                return err;
            })

        }
    }
    else {
        return dispatch => {
            axios.get(`http://localhost:4000/jobs/${pageNo}`).then((res) => {
                localStorage.setItem('total_page', res.data.page)
                dispatch(getDataSuccess(res.data.message));
            }).catch((err) => {
                return err;
            })

        }
    }


}
export const postJob = (company) => {
    var url;

    url = 'http://localhost:4000/postjob/';
    return dispatch => {
        axios.post(url, company).then((res) => {
            if (res.data.errors) {
                window.alert(JSON.stringify(res.data.message))
            } else {
                let pr = new Promise((resolve, reject) => {
                    dispatch(postJobSucess(res.data))
                    resolve();
                })
                pr.then(() => {
                    dispatch(getjob_user(1,company.company_name))
                })

            }

        }).catch((err) => {
            return err;
        })

    }
}
export const updateJobs= (data, company_name) => {
    return dispatch => {
        axios.put('http://localhost:4000/jobupdate', data)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.parse(res.data.message));
                }
                else {
                    let pr = new Promise((resolve, reject) => {
                        dispatch(updateJobSucess(res.data));
                        resolve();
                    })
                    pr.then(() => {
                        dispatch(getjob_user(1,company_name));
                    })
                }
            }).catch((err) => {
                return err;
            })
    }
}