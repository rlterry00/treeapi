var schema_v1 = {
  'name': 'branches',
  'options': {
    'idInjection': true,
    'mysql': {
      'schema': 'LOOPBACK',
      'table': 'branches'
    }
  },
  'properties': {
    'name': {
      'type': 'String',
      'required': true,
      'length': 40
    },
    'range_start': {
      'type': 'Number',
      'required': false
    },
    'range_finish': {
      'type': 'Number',
      'required': false
    },
    'children': {
      'type': 'Number',
      'required': false
    },
    'timestamp': {
      'type': 'date'
    }
  }
};

var ds = Model.app.dataSources.oracle;

ds.createModel(schema_v1.name, schema_v1.properties, schema_v1.options);

ds.automigrate(function () {
  ds.discoverModelProperties('branches', function (err, props) {
    console.log(props);
  });
});

var schema_v2 = {
  'name': 'leaves',
  'options': {
    'idInjection': true,
    'mysql': {
      'schema': 'LOOPBACK',
      'table': 'leaves'
    }
  },
  'properties': {
    'number': {
      'type': 'number',
      'required': false,
    },
    'timestamp': {
      'type': 'date',
    }
  }
};

var ds = Model.app.dataSources.oracle;

ds.createModel(schema_v2.name, schema_v2.properties, schema_v2.options);

ds.automigrate(function () {
  ds.discoverModelProperties('leaves', function (err, props) {
    console.log(props);
  });
});
