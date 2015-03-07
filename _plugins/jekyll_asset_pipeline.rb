require 'japr'

module JAPR
  class SassConverter < JAPR::Converter
    require 'sass'

    def self.filetype
      '.scss'
    end

    def convert
      return Sass::Engine.new(@content, syntax: :scss).render
    end
  end

  class CssCompressor < JAPR::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      puts "Asset Pipeline: Compressing CSS"
      return YUI::CssCompressor.new.compress(@content)
    end
  end
  
  class JavaScriptCompressor < JAPR::Compressor
    require 'yui/compressor'

    def self.filetype
      '.js'
    end

    def compress
      puts "Asset Pipeline: Compressing JS"
      return YUI::JavaScriptCompressor.new(munge: true).compress(@content)
    end
  end
end
