async function logVisit() {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    const logData = {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        location: `${data.latitude},${data.longitude}`,
        userAgent: navigator.userAgent,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href
    };

    fetch('https://api.logsnag.com/v1/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 3c4d530b92a4b68d58cc2c16b1024858'
        },
        body: JSON.stringify({
            project: 'pulse',
            channel: 'logins',
            event: 'Visit Logged',
            description: `Visit from ${logData.city}, ${logData.region}, ${logData.country}`,
            icon: '👀',
            notify: true,
            tags: logData
        })
    });
}

document.addEventListener('DOMContentLoaded', logVisit);
