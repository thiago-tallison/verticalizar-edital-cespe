/* eslint-disable no-useless-escape */
function separarMateriasEmNovaLinha(data) {
  const re = /([A-ZÇÃÕÂÊÎÔÛÁÉÍÓÚÀ\s\-]+:\s)/g

  data = data.replace(re, function (matched) {
    let disciplina = `\n\n\n${matched.trim()}\n`
    disciplina = disciplina.replace(':', '')
    return disciplina
  })

  return data
}

function separarTopicosEmNovaLinha(data) {
  const re = /([\w\d\)]+\.)\s+((\d+)(\.\d)*\s+)/g
  const ehNumeracaoDeArtigo = (s) => s.match(/arts\./)
  data = data.replace(re, function (a, b, c) {
    if (ehNumeracaoDeArtigo(a)) {
      return a
    }
    return b + '\n' + c
  })
  return data
}

function identarTopicos(data, espacamento) {
  const topico = /(\n)+((\d+)(\.\d)*)/g
  return data.replace(topico, function (a, quebraLinha, numeroTopico) {
    const pontos = a.match(/\./g)
    if (pontos) {
      const quantidadePontos = pontos.length
      const quantidadeEspacos = quantidadePontos * espacamento
      return quebraLinha + ' '.repeat(quantidadeEspacos) + numeroTopico
    }
    return a
  })
}

function sanitizarDados(data) {
  function removerEspacosDuplos(data) {
    const re = /\s{2,}/g
    return data.replace(re, ' ')
  }

  function removerNumeroPagina(data) {
    const re = /\n\s+\d+\n/g
    data = data.replace(re, '')
    return data
  }

  function removerQuebraLinha(data) {
    return data.replace(/\n/g, ' ')
  }

  data = removerNumeroPagina(data)
  data = removerEspacosDuplos(data)
  data = removerQuebraLinha(data)
  data = data.trim()
  return data
}

function removerPontoFinalEmTopicos(data) {
  const re = /\.\n/gm
  const re1 = /\.\s*\n/g
  data = data.replace(re, '\n')
  data = data.replace(re1, '\n\n\n')
  return data
}

function semNumeracao(data, semNumeracao) {
  const re = /^[\d\.]+\s+/gm
  const re1 = /^(\s+)[\d\.]+\s+/gm
  if (semNumeracao) {
    data = data.replace(re, '').replace(re1, '$1')
  }

  return data
}

export default function formatar(data) {
  let { texto, numeracao, espacamento } = data
  espacamento = parseInt(espacamento) || 3
  texto = sanitizarDados(texto)
  texto = separarMateriasEmNovaLinha(texto)
  texto = separarTopicosEmNovaLinha(texto)
  texto = identarTopicos(texto, espacamento)
  texto = removerPontoFinalEmTopicos(texto)
  texto = semNumeracao(texto, numeracao)
  return texto
}
