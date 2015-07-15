jQuery(document).ready(function ($) {

    $(document).on('click', '.gallery_meta_upload', function() {

        var send_attachment_bkp = wp.media.editor.send.attachment;
        var obj = $(this);

        wp.media.editor.send.attachment = function(props, attachment) {

            obj.closest('tr')
                .find('td:first-child')
                    .find('img').attr('src', attachment.url).show()
                    .end()
                .next('td')
                    .find('.gallery_meta_url').val(attachment.id);


            wp.media.editor.send.attachment = send_attachment_bkp;
        }

        wp.media.editor.open();

        return false;
    });


    $(document).on('click', '.add_new_image', function (e) {
        e.preventDefault();

        var large = '<div class="dg-row"><div class="dg-col-md-4" style="height: 150px; overflow: hidden;"><img src="" class="gallery_meta_img" style="display: none; padding: 10px 10px 10px 0; border: none;" width="100%" style="border: 3px solid #dedede;"></div><div class="dg-col-md-4" style="padding-top: 60px"><input type="text" name="gallery_meta_url[]" class="gallery_meta_url wide" value="" style="display: none;"><input type="text" name="gallery_meta_caption[]" class="gallery_meta_caption wide" value=""></div><div class="dg-col-md-2 dg-text-right" style="padding-top: 60px"><input type="button" name="gallery_meta_upload" class="gallery_meta_upload wide" value="Upload" style="cursor: pointer; cursor: hand;"></div><div class="dg-col-md-2 dg-text-right" style="padding-top: 60px"><input type="button" name="gallery_meta_remove" class="gallery_meta_remove" value="Remove" style="display: none; cursor: pointer; cursor: hand;"></div></div>'
        $('.gallery_meta_table').prepend(large);
    });

    $(document).on('click', '.gallery_meta_remove', function () {
        $(this).parent().parent().fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false
    });

    $('.dg-color-field').wpColorPicker();
});