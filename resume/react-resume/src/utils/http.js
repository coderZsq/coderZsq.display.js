const host = 'http://localhost:8080';

export function GET(url) {
    var fetchOptions = {
        method: 'GET'
    };
    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions).then(response => response.json()).then(response => resolve(response.data)).catch((error) => {
            reject(error);
        })
    });
}

export function POST(url, formData) {
    var fetchOptions = {
        method: 'POST',
        headers: {},
        body: formData
    };
    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions).then(response => response.json()).then(response => resolve(response.data)).catch((error) => {
            reject(error);
        })
    });
}

export const URL = {
    fetchProfile: `${host}/portal/fetch_profile.do`,
    fetchProjects: `${host}/portal/fetch_projects.do`,
    fetchGitHub: `${host}/portal/fetch_github.do`,
    fetchArticles: `${host}/portal/fetch_articles.do`,
    fetchExperience: `${host}/portal/fetch_experience.do`,
    fetchContact: `${host}/portal/fetch_contact.do`,

    updateProfile: `${host}/backend/update_profile.do`,
    updateProfileSocial: `${host}/backend/update_profile_social.do`,
    insertProfileSocial: `${host}/backend/insert_profile_social.do`,
    deleteProfileSocial: `${host}/backend/delete_profile_social.do`,
    updateProfileInterest:`${host}/backend/update_profile_interest.do`,
    insertProfileInterest: `${host}/backend/insert_profile_interest.do`,
    deleteProfileInterest: `${host}/backend/delete_profile_interest.do`,
    updateProfileEducation: `${host}/backend/update_profile_education.do`,
    insertProfileEducation: `${host}/backend/insert_profile_education.do`,
    deleteProfileEducation: `${host}/backend/delete_profile_education.do`
}
