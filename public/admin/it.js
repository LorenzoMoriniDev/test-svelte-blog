window.CMS.registerLocale('it', {
  auth: {
    login: 'Accedi',
    loggingIn: 'Accesso in corso...',
    loginWithNetlify: 'Accedi con Netlify',
    loginWithBitbucket: 'Accedi con Bitbucket',
    loginWithGitHub: 'Accedi con GitHub',
    loginWithGitLab: 'Accedi con GitLab',
    loginWithGitea: 'Accedi con Gitea',
    errors: {
      email: "Assicurati di aver inserito l'email.",
      password: 'Per favore inserisci la tua password.',
      identitySettings:
        "Impossibile accedere alle impostazioni di Identity. Quando usi il backend git-gateway, assicurati di aver abilitato il servizio Identity e Git Gateway.",
    },
  },
  app: {
    header: {
      content: 'Contenuti',
      media: 'Media',
      settings: 'Impostazioni',
      workflow: 'Flusso di lavoro',
      auth: {
        loggedOut: 'Disconnesso',
        profile: 'Profilo',
        logout: 'Esci',
      },
    },
    app: {
      errorHeader: 'Errore nel caricamento della configurazione del CMS',
      configErrors: 'Errori di configurazione',
      checkConfigYml: 'Controlla il tuo file config.yml.',
      loadingConfig: 'Caricamento configurazione...',
      waitingForBackend: 'In attesa del backend...',
    },
    backend: {
      error: 'Si è verificato un errore durante l’accesso al backend. Controlla la console per maggiori informazioni.',
    },
    index: {
      mainHeader: 'Libreria dei Contenuti',
      search: 'Cerca...',
      quickAdd: 'Aggiunta Rapida',
    },
    collection: {
      sidebar: {
        collections: 'Collezioni',
        search: 'Cerca...',
      },
      collectionTop: {
        sortBy: 'Ordina per',
        viewAs: 'Vedi come',
        newButton: 'Nuovo %{collectionLabel}',
        search: 'Cerca...',
        // TODO: add i18n support for these pluralization strings
        // … items: '… articoli'
      },
      entries: {
        loading: 'Caricamento Voci...',
        caching: 'Caching Voci...',
        longerLoading: 'L’operazione potrebbe richiedere alcuni minuti',
        noEntries: 'Nessuna Voce',
      },
      defaultFields: {
        author: {
          label: 'Autore',
        },
        updatedOn: {
          label: 'Aggiornato il',
        },
      },
    },
    editor: {
      editorControl: {
        field: {
          optional: 'opzionale',
        },
      },
      editorControlPane: {
        widget: {
          required: '%{fieldLabel} è obbligatorio.',
          regexPattern: '%{fieldLabel} non corrisponde al modello: %{pattern}.',
          processing: '%{fieldLabel} è in elaborazione.',
          range: '%{fieldLabel} deve essere compreso tra %{min} e %{max}.',
          min: '%{fieldLabel} deve essere almeno %{min}.',
          max: '%{fieldLabel} deve essere al massimo %{max}.',
          rangeCount: '%{fieldLabel} deve avere tra %{minCount} e %{maxCount} elementi.',
          minCount: '%{fieldLabel} deve avere almeno %{minCount} elementi.',
          maxCount: '%{fieldLabel} deve avere al massimo %{maxCount} elementi.',
          invalidPath: `'%{path}' non è un percorso valido`,
          pathExists: `Il percorso '%{path}' esiste già`,
        },
        i18n: {
          writingInLocale: 'Scrittura in %{locale}',
        },
      },
      editor: {
        onLeavePage: 'Sei sicuro di voler lasciare questa pagina?',
        onUpdatingWithUnsavedChanges:
          'Ci sono modifiche non salvate. Salva prima di aggiornare lo stato.',
        onPublishingNotReady: 'Per favore, aggiorna lo stato a "Pronto" prima di pubblicare.',
        onPublishingWithUnsavedChanges:
          'Ci sono modifiche non salvate. Per favore, salva prima di pubblicare.',
        onPublishing: 'Sei sicuro di voler pubblicare questa voce?',
        onUnpublishing: 'Sei sicuro di voler annullare la pubblicazione di questa voce?',
        onDeleteWithUnsavedChanges:
          'Ci sono modifiche non salvate. Salva prima di eliminare.',
        onDelete: 'Sei sicuro di voler eliminare questa voce?',
        onDeletePublished: 'Sei sicuro di voler eliminare questa voce pubblicata?',
        loadingEntry: 'Caricamento voce...',
        confirmLoadBackup: 'È stato trovato un backup locale per questa voce. Vuoi usarlo?',
      },
      editorToolbar: {
        publishing: 'Pubblicazione...',
        publish: 'Pubblica',
        published: 'Pubblicato',
        unpublish: 'Annulla pubblicazione',
        unpublishing: 'Annullamento pubblicazione in corso...',
        publishAndCreateNew: 'Pubblica e crea nuovo',
        publishAndDuplicate: 'Pubblica e duplica',
        deleteEntry: 'Elimina voce',
        saving: 'Salvataggio...',
        save: 'Salva',
        deleting: 'Eliminazione...',
        updating: 'Aggiornamento...',
        status: 'Stato: %{status}',
        backCollection: ' Scrittura nella collezione %{collectionLabel}',
        unsavedChanges: 'Modifiche non salvate',
        changesSaved: 'Modifiche salvate',
        draft: 'Bozza',
        inReview: 'In revisione',
        ready: 'Pronto',
        now: 'adesso',
      },
      editorWidgets: {
        markdown: {
          bold: 'Grassetto',
          italic: 'Corsivo',
          code: 'Codice',
          link: 'Link',
          heading: 'Titolo',
          quote: 'Citazione',
          bulletedList: 'Elenco puntato',
          numberedList: 'Elenco numerato',
          richText: 'Testo ricco',
          markdown: 'Markdown',
          readMore: 'Leggi tutto',
        },
        image: {
          choose: 'Scegli un’immagine',
          chooseDifferent: 'Scegli un’immagine diversa',
          remove: 'Rimuovi immagine',
        },
        file: {
          choose: 'Scegli un file',
          chooseDifferent: 'Scegli un file diverso',
          remove: 'Rimuovi file',
        },
        unknownControl: {
          noControl: "Nessun controllo per il widget '%{widget}'.",
        },
        unknownPreview: {
          noPreview: "Nessuna anteprima per il widget '%{widget}'.",
        },
        headingOptions: {
          headingOne: 'Titolo 1',
          headingTwo: 'Titolo 2',
          headingThree: 'Titolo 3',
          headingFour: 'Titolo 4',
          headingFive: 'Titolo 5',
          headingSix: 'Titolo 6',
        },
        datetime: {
          now: 'Adesso',
        },
      },
    },
    mediaLibrary: {
      mediaLibraryCard: {
        draft: 'Bozza',
      },
      mediaLibrary: {
        onDelete: 'Sei sicuro di voler eliminare il media selezionato?',
        fileTooLarge:
          'Il file è troppo grande.\nConfigurato per non superare %{size} kB.',
      },
      mediaLibraryModal: {
        loading: 'Caricamento...',
        noResults: 'Nessun risultato.',
        noAssetsFound: 'Nessun asset trovato.',
        privateAccess: 'Accesso privato',
        images: 'Immagini',
        mediaAssets: 'Asset media',
        search: 'Cerca...',
        uploading: 'Caricamento...',
        upload: 'Carica nuovo',
        deleting: 'Eliminazione...',
        deleteSelected: 'Elimina selezionato',
        chooseSelected: 'Scegli selezionato',
      },
    },
    workflow: {
      workflow: {
        loading: 'Caricamento voci del Flusso di Lavoro',
        workflowHeading: 'Flusso di Lavoro Editoriale',
        newPost: 'Nuovo Articolo',
        description:
          '%{smart_count} voce in attesa di revisione, %{readyCount} pronta per essere pubblicata. |||| %{smart_count} voci in attesa di revisione, %{readyCount} pronte per essere pubblicate. ',
        dateFormat: 'MMMM D',
      },
      workflowCard: {
        lastChange: '%{date} da %{author}',
        lastChangeNoAuthor: '%{date}',
        lastChangeNoDate: 'da %{author}',
        deleteChanges: 'Elimina modifiche',
        deleteNewEntry: 'Elimina nuova voce',
        publishChanges: 'Pubblica modifiche',
        publishNewEntry: 'Pubblica nuova voce',
      },
      workflowList: {
        draftHeader: 'Bozze',
        inReviewHeader: 'In Revisione',
        readyHeader: 'Pronto',
        currentEntries: '%{smart_count} voce |||| %{smart_count} voci',
      },
    },
  },
});
