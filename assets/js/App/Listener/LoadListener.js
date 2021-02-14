Application.getContainer().getInstanceByIdentifier('LoadEvent').addListener(
    (...args) => {
        // The event itself
        const e = args[0];

        console.log('LOAD LISTENER BROOOO');
    }
);
