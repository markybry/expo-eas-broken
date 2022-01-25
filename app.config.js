export default ({
  config
}) => {
  return {
    ...config,
    
      "updates": {
        "fallbackToCacheTimeout": 0,
        "enabled": false,
        "checkAutomatically": "ON_ERROR_RECOVERY"
      },
      "version": process.env.CAREFOR_EMAR_VERSION || 'dev',
      "extra": {
        "configChannel": process.env.CAREFOR_EMAR_ENVIRONMENT || "development", //works for web build too. release channels do not.
      }
  }

};
