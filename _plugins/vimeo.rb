# From https://gist.github.com/shuvalov-anton/4414183

module Jekyll
  class Vimeo < Liquid::Tag

    def initialize(name, id, tokens)
      super
      @id = id
    end

    def render(context)
      %(<div class="video-container"><iframe class="vimeo-iframe" src="http://player.vimeo.com/video/#{@id}" frameborder="0">   </iframe></div>)
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)
