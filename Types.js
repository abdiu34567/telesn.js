/**
 * TypeScript Definitions for Telesun Library
 * ==============================================================
 * These type definitions are designed to provide enhanced code completion and
 * IntelliSense support within the Google Apps Script environment. They adhere
 * to the limitations and conventions of Google Apps Script to ensure a seamless
 * development experience.
 *
 * Important Notes:
 * - The types are structured to complement the unique characteristics of Google
 *   Apps Script. Users familiar with TypeScript and Google Apps Script will find
 *   these types intuitive and helpful for developing robust applications.
 * - Modifications to these types should be made cautiously. Deep understanding
 *   of both the Telesun library's API and Google Apps Script's capabilities is
 *   essential to maintain the integrity and usefulness of these definitions.
 *
 * Contributions:
 * Contributions to improve or extend these type definitions are highly welcome.
 * If you have suggestions or improvements, please feel free to submit a pull
 * request or open an issue on the project's GitHub repository. Your input is
 * valuable in making Telesun more accessible and enjoyable for the developer
 * community.
 *
 * Credits:
 * These type definitions were created by `Abd Urgessa` to enhance the development
 * experience with the Telesun library in Google Apps Script. Special thanks to
 * everyone who contributes to refining and expanding these types.
 *
 * ==============================================================================
 * Unless you have a good understanding of the Telesun API and the limitations
 * imposed by Google Apps Script, it is recommended not to modify the types
 * provided here. This ensures that you can take full advantage of the library's
 * capabilities without encountering unexpected issues.
 */

/**
 * main telesun class
 * @typedef {Object} telesun
 * @property {function(string): telesun} connectToSpreadSheet - Connects to a Google Spreadsheet using `spreadsheet ID`.
 * @property {function(Object): telesun} temporaryMemory - Configures temporary memory for the bot, including cache and session.
 * @property {function(Object): telesun} permanentMemory - Configures permanent memory for the bot, including cache and session.
 * @property {function(Update): telesun} handleUpdate - Handles incoming updates from Telegram.
 * @property {function(function(ctx, next): void): telesun} use - Registers a middleware function to be used by the bot.
 *
 * @property {function(UpdateType, function(ctx, next): void): telesun} on - Registers a middleware for a specific update type. The first parameter is one of [`message`, `edited_message`, `channel_post`, `edited_channel_post`, `inline_query`, `chosen_inline_result`, `callback_query`, `shipping_query`, `pre_checkout_query`, `poll`, `poll_answer`, `my_chat_member`, `chat_member`, `chat_join_request`, `message_reaction`, `message_reaction_count`, `chat_boost`, `removed_chat_boost`].
 *
 * @property {function(string|string[]|RegExp, function(ctx, next): void): telesun} action - Registers a middleware for a specific action.
 * @property {function(string|string[]|RegExp, function(ctx, next): void): telesun} stage - Registers a middleware for a specific stage.
 * @property {function(function(ctx, next): void): telesun} start - Registers a start command middleware.
 * @property {function(function(ctx, next): void): telesun} help - Registers a help command middleware.
 * @property {function(string|string[]|RegExp, function(ctx, next): void): telesun} hears - Registers a middleware that triggers on matching text.
 * @property {function(function(ctx, next): void): telesun} contact - Registers a middleware for contact updates.
 * @property {function(function(ctx, next): void): telesun} photo - Registers a middleware for photo updates.
 * @property {function(function(ctx, next): void): telesun} video - Registers a middleware for video updates.
 * @property {function(function(ctx, next): void): telesun} voice - Registers a middleware for voice message updates.
 * @property {function(function(ctx, next): void): telesun} document - Registers a middleware for document updates.
 * @property {function(function(ctx, next): void): telesun} audio - Registers a middleware for audio updates.
 * @property {function(function(ctx, next): void): telesun} text - Registers a middleware for text message updates.
 * @property {function(function(ctx, next): void): telesun} sticker - Registers a middleware for sticker updates.
 * @property {function(function(ctx, next): void): telesun} commands - Registers a middleware for any command.
 * @property {function(string|string[]|RegExp, function(ctx, next): void): telesun} command - Registers a middleware for a specific command.
 * @property {function(Object, UpdateConfig): void} handleWebhook Handles webhook updates.
 * @property {function(LongPollingOptions): void} longPolling Initiates long polling.
 * @property {function(PollingOptions): void} polling Initiates simple polling.
 * @property {function(Object, DevHookOptions): void} devHook Sets up a development webhook.
 * @property {function(SetWebhookOptions): Object} setWebhook Configures the webhook for the bot.
 * @property {function(DeleteWebhookOptions): Object} deleteWebhook Deletes the configured webhook.
 */

/**
 * Options for initiating long polling.
 * @typedef {Object} LongPollingOptions
 * @property {number} [sleep=1000] The delay between polling requests in milliseconds.
 * @property {number} [timeout=60] Timeout in seconds for long polling.
 */

/**
 * Options for initiating simple polling.
 * @typedef {Object} PollingOptions
 * @property {number} [limit=100] The maximum number of updates to receive.
 * @property {number} [timeout=60] Timeout in seconds for polling.
 */

/**
 * Options for setting up a development webhook.
 * @typedef {Object} DevHookOptions
 * @property {InputFile} [certificate] Your public key certificate file.
 * @property {string} [ip_address] The IP address of the server.
 * @property {number} [max_connections] Maximum allowed number of simultaneous HTTPS connections to the webhook.
 * @property {string[]} [drop_pending_updates] List of types of updates to drop.
 * @property {string} [secret_token] A secret token to authenticate the webhook.
 * @property {Server} [server] The server configuration for the webhook.
 */

/**
 * Options for configuring the webhook.
 * @typedef {Object} SetWebhookOptions
 * @property {string} url The HTTPS URL to send updates to.
 * @property {InputFile} [certificate] Your public key certificate file.
 * @property {string} [ip_address] The IP address of the server.
 * @property {number} [max_connections] Maximum allowed number of simultaneous HTTPS connections to the webhook.
 * @property {string[]} [drop_pending_updates] List of types of updates to drop.
 * @property {string} [secret_token] A secret token to authenticate the webhook.
 */

/**
 * Options for deleting the configured webhook.
 * @typedef {Object} DeleteWebhookOptions
 * @property {boolean} drop_pending_updates Whether to drop pending updates.
 */

/**
 * Update types for the 'on' method.
 * @typedef {"message" | "edited_message" | "channel_post" | "edited_channel_post" | "inline_query" | "chosen_inline_result" | "callback_query" | "shipping_query" | "pre_checkout_query" | "poll" | "poll_answer" | "my_chat_member" | "chat_member" | "chat_join_request" | "message_reaction" | "message_reaction_count" | "chat_boost" | "removed_chat_boost"} UpdateType
 */

/**
 * Formatting options.
 * @typedef {"HTML" | "MarkdownV2"} Format
 */

/**
 * config options for devHook.
 * @typedef {"webhook" | "polling"} UpdateConfig
 */

/**
 * server config options for devHook.
 * @typedef {"GAS" | "VERCEL" |"RENDER"} Server
 */

/**
 * @typedef {Object} Update
 * @property {Message} [message] - New incoming message of any kind - text, photo, sticker, etc.
 * @property {Message} [edited_message] - Message edit notification for known messages.
 * @property {Message} [channel_post] - New incoming channel post of any kind - text, photo, sticker, etc.
 * @property {Message} [edited_channel_post] - Channel post edit notification for known posts.
 * @property {MessageReactionUpdated} [message_reaction] - User changed a message reaction; requires bot as admin.
 * @property {MessageReactionCountUpdated} [message_reaction_count] - Grouped anonymous message reaction changes.
 * @property {InlineQuery} [inline_query] - New incoming inline query update.
 * @property {ChosenInlineResult} [chosen_inline_result] - User's choice from an inline query sent to chat.
 * @property {CallbackQuery} [callback_query] - New incoming callback query.
 * @property {ShippingQuery} [shipping_query] - New incoming shipping query. Only for invoices with flexible price.
 * @property {PreCheckoutQuery} [pre_checkout_query] - New incoming pre-checkout query. Contains full information about checkout.
 * @property {Poll} [poll] - Notification of new poll state; for stopped polls and those sent by the bot.
 * @property {PollAnswer} [poll_answer] - User changed their vote in a non-anonymous poll sent by the bot.
 * @property {ChatMemberUpdated} [my_chat_member] - Bot's chat member status updated in a chat.
 * @property {ChatMemberUpdated} [chat_member] - Chat member's status updated; requires bot admin.
 * @property {ChatJoinRequest} [chat_join_request] - Chat join request sent; requires bot's "can_invite_users" right.
 * @property {ChatBoostUpdated} [chat_boost] - Chat boost added or changed; requires bot admin.
 * @property {ChatBoostRemoved} [removed_chat_boost] - Chat boost removed; requires bot admin.
 *
 */

/**
 * Options for forwarding a single message from one chat to another.
 * @typedef {Object} ForwardMessageOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(number|string)} from_chat_id Unique identifier for the chat where the original message was sent or username of the target channel, in the format @channelusername.
 * @property {number} message_id Unique message identifier to forward.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the forwarded message from forwarding and saving.
 */

/**
 * Options for forwarding multiple messages from one chat to another.
 * @typedef {Object} ForwardMessagesOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(number|string)} from_chat_id Unique identifier for the chat where the original messages were sent or username of the target channel, in the format @channelusername.
 * @property {number[]} message_ids Array of unique message identifiers to forward.
 * @property {boolean} [disable_notification] Sends the messages silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the forwarded messages from forwarding and saving.
 */

/**
 * Options for copying a single message from one chat to another, potentially with a new caption.
 * @typedef {Object} CopyMessageOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(number|string)} from_chat_id Unique identifier for the chat where the original message was sent or username of the target channel, in the format @channelusername.
 * @property {number} message_id Unique message identifier to copy.
 * @property {string} [caption] New caption for the message.
 * @property {Format} [parse_mode] Formatting options for the caption, Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the new caption, which can be specified instead of parse_mode.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the copied message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options for the message.
 */

/**
 * Options for copying multiple messages from one chat to another without changing the caption.
 * @typedef {Object} CopyMessagesOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(number|string)} from_chat_id Unique identifier for the chat where the original messages were sent or username of the target channel, in the format @channelusername.
 * @property {number[]} message_ids Array of unique message identifiers to copy.
 * @property {boolean} [disable_notification] Sends the messages silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the copied messages from forwarding and saving.
 * @property {boolean} [remove_caption] Indicates whether to remove the captions of the copied messages.
 */

/**
 * Options for sending a photo.
 * @typedef {Object} SendPhotoOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(InputFile|string)} photo Photo to send.
 * @property {string} [caption] Photo caption, may also be used when resending photos by file_id.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {boolean} [has_spoiler] Marks the caption as containing a spoiler.
 * @property {boolean} [disable_notification] Sends the photo silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent photo from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending an audio file.
 * @typedef {Object} SendAudioOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel.
 * @property {number} [message_thread_id] Unique identifier for the target message thread.
 * @property {(InputFile|string)} audio Audio file to send.
 * @property {string} [caption] Audio caption, 0-1024 characters after entities parsing.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {number} [duration] Duration of the audio in seconds.
 * @property {string} [performer] Performer of the audio.
 * @property {string} [title] Title of the audio.
 * @property {(InputFile|string)} [thumbnail] Thumbnail of the file to send.
 * @property {boolean} [disable_notification] Sends the audio silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent audio from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a document.
 * @typedef {Object} SendDocumentOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel.
 * @property {number} [message_thread_id] Unique identifier for the target message thread.
 * @property {(InputFile|string)} document File to send.
 * @property {(InputFile|string)} [thumbnail] Thumbnail of the file to send.
 * @property {string} [caption] Document caption, may also be used when resending documents by file_id), 0-1024 characters after entities parsing.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {boolean} [disable_content_type_detection] Disables automatic server-side content type detection for files uploaded using multipart/form-data.
 * @property {boolean} [disable_notification] Sends the document silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent document from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a video.
 * @typedef {Object} SendVideoOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel.
 * @property {number} [message_thread_id] Unique identifier for the target message thread.
 * @property {(InputFile|string)} video Video to send.
 * @property {number} [duration] Duration of sent video in seconds.
 * @property {number} [width] Video width.
 * @property {number} [height] Video height.
 * @property {(InputFile|string)} [thumbnail] Thumbnail of the file to send.
 * @property {string} [caption] Video caption, may also be used when resending videos by file_id), 0-1024 characters after entities parsing.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {boolean} [has_spoiler] Marks the caption as containing a spoiler.
 * @property {boolean} [supports_streaming] If the video is suitable for streaming.
 * @property {boolean} [disable_notification] Sends the video silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent video from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending an animation.
 * @typedef {Object} SendAnimationOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(InputFile|string)} animation Animation to send.
 * @property {number} [duration] Duration of sent animation in seconds.
 * @property {number} [width] Animation width.
 * @property {number} [height] Animation height.
 * @property {(InputFile|string)} [thumbnail] Thumbnail of the file to send.
 * @property {string} [caption] Caption for the animation, 0-1024 characters after entities parsing.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {boolean} [has_spoiler] Marks the caption as containing a spoiler.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a voice message.
 * @typedef {Object} SendVoiceOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(InputFile|string)} voice Audio file to send as a voice message.
 * @property {string} [caption] Caption for the voice message, 0-1024 characters after entities parsing.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {number} [duration] Duration of the voice message in seconds.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a video note.
 * @typedef {Object} SendVideoNoteOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(InputFile|string)} video_note Video note to send.
 * @property {number} [duration] Duration of the video note in seconds.
 * @property {number} [length] Video width and height, since video notes are square-shaped.
 * @property {(InputFile|string)} [thumbnail] Thumbnail of the file to send.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a media group.
 * @typedef {Object} SendMediaGroupOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(InputMediaAudio[]|InputMediaDocument[]|InputMediaPhoto[]|InputMediaVideo[])} media A JSON-serialized array describing photos, videos, documents, or audios to be sent, making up a media group.
 * @property {boolean} [disable_notification] Sends the messages silently. Users will receive notifications with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent messages from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 */

/**
 * Options for sending a location message.
 * @typedef {Object} SendLocationOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {number} latitude Latitude of the location.
 * @property {number} longitude Longitude of the location.
 * @property {number} [horizontal_accuracy] The radius of uncertainty for the location, measured in meters; 0-1500.
 * @property {number} [live_period] Time in seconds for which the location will be live, ranging from 60 to 86400.
 * @property {number} [heading] For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {number} [proximity_alert_radius] For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a venue message.
 * @typedef {Object} SendVenueOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {number} latitude Latitude of the venue.
 * @property {number} longitude Longitude of the venue.
 * @property {string} title Name of the venue.
 * @property {string} address Address of the venue.
 * @property {string} [foursquare_id] Foursquare identifier of the venue.
 * @property {string} [foursquare_type] Foursquare type of the venue., For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
 * @property {string} [google_place_id] Google Places identifier of the venue.
 * @property {string} [google_place_type] Google Places type of the venue., See [Google Places API](https://developers.google.com/places/web-service/supported_types) for supported types.)
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a contact message.
 * @typedef {Object} SendContactOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {string} phone_number Contact's phone number.
 * @property {string} first_name Contact's first name.
 * @property {string} [last_name] Contact's last name.
 * @property {string} [vcard] Additional data about the contact in the form of a vCard, 0-2048 bytes.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a poll.
 * @typedef {Object} SendPollOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {string} question Poll question, 1-300 characters.
 * @property {string[]} options List of answer options, 2-10 strings 1-100 characters each.
 * @property {boolean} [is_anonymous] True, if the poll needs to be anonymous.
 * @property {string} [type] Poll type, “quiz” or “regular”, defaults to “regular”.
 * @property {boolean} [allows_multiple_answers] True, if the poll allows multiple answers, ignored for quizzes.
 * @property {number} [correct_option_id] 0-based identifier of the correct answer option, required for quizzes.
 * @property {string} [explanation] Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with the possibility to include entities.
 * @property {Format} [explanation_parse_mode] Mode for parsing entities in the explanation. See formatting options for more details.
 * @property {MessageEntity[]} [explanation_entities] List of special entities that appear in the explanation, which can be specified instead of parse_mode.
 * @property {number} [open_period] Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
 * @property {number} [close_date] Point in time, Unix timestamp) when the poll will be automatically closed. Can't be used together with open_period.
 * @property {boolean} [is_closed] Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a dice message.
 * @typedef {Object} SendDiceOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {string} [emoji] Emoji on which the dice throw animation is based.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options for the message.
 */

/**
 * Options for sending chat action.
 * @typedef {Object} SendChatActionOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {string} action Type of action to broadcast.
 */

/**
 * Options for setting message reaction.
 * @typedef {Object} SetMessageReactionOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} message_id Identifier of the message to add the reaction to.
 * @property {ReactionType[]} [reaction] Types of reactions to set on the message.
 * @property {boolean} [is_big] Whether the reaction should be displayed in a larger format.
 */

/**
 * Options for getting a user's profile photos.
 * @typedef {Object} GetUserProfilePhotosOptions
 * @property {number} user_id Unique identifier of the target user.
 * @property {number} [offset] Sequential number of the first photo to be returned.
 * @property {number} [limit] Limits the number of photos to be retrieved.
 */

/**
 * Options for getting file information.
 * @typedef {Object} GetFileOptions
 * @property {string} file_id File identifier to get info about.
 */

/**
 * Options for banning a chat member.
 * @typedef {Object} BanChatMemberOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user to be banned.
 * @property {number} [until_date] Date when the ban will be lifted. Unix time.
 * @property {boolean} [revoke_messages] Pass True to delete all messages from the chat for the user that is being removed.
 */

/**
 * Options for unbanning a previously banned user in a supergroup or channel.
 * @typedef {Object} UnbanChatMemberOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user.
 * @property {boolean} [only_if_banned] Do the unban action only if the user is currently banned.
 */

/**
 * Options for restricting a user in a supergroup.
 * @typedef {Object} RestrictChatMemberOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user to restrict.
 * @property {ChatPermissions} permissions Permissions to be set for the restricted user.
 * @property {boolean} [use_independent_chat_permissions] Use independent permissions for the chat.
 * @property {number} [until_date] Date when restrictions will be lifted for the user, unix time.
 */

/**
 * Options for promoting or demoting a user in a supergroup or channel.
 * @typedef {Object} PromoteChatMemberOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user to promote or demote.
 * @property {boolean} [is_anonymous] The user's presence in chat is hidden.
 * @property {boolean} [can_manage_chat] The user can access the chat event log, chat statistics, message statistics in channels, see channel members, manage voice chats.
 * @property {boolean} [can_delete_messages] The user can delete messages of other users.
 * @property {boolean} [can_manage_video_chats] The user can manage video chats.
 * @property {boolean} [can_restrict_members] The user can restrict, ban or unban chat members.
 * @property {boolean} [can_promote_members] The user can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly, promoted by administrators that were appointed by the user.
 * @property {boolean} [can_change_info] The user can change the chat title, photo, and other settings.
 * @property {boolean} [can_invite_users] The user can invite new users to the chat.
 * @property {boolean} [can_post_messages] The user can post in the channel.
 * @property {boolean} [can_edit_messages] The user can edit messages of others and can pin messages.
 * @property {boolean} [can_pin_messages] The user can pin messages.
 *

/**
 * Options for setting a custom title for an administrator in a supergroup.
 * @typedef {Object} SetChatAdministratorCustomTitleOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user to set a custom title.
 * @property {string} custom_title New custom title for the administrator; 0-16 characters, emoji are not allowed.
 */

/**
 * Options for banning a channel chat in a supergroup or channel.
 * @typedef {Object} BanChatSenderChatOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} sender_chat_id Unique identifier of the target sender chat to ban.
 */

/**
 * Options for unbanning a previously banned channel chat.
 * @typedef {Object} UnbanChatSenderChatOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} sender_chat_id Unique identifier of the target sender chat to unban.
 */

/**
 * Options for setting default chat permissions for all members.
 * @typedef {Object} SetChatPermissionsOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {ChatPermissions} permissions New default chat permissions to set.
 * @property {boolean} [use_independent_chat_permissions] Specifies whether the chat supports independent default chat permissions for channels and supergroups.
 */

/**
 * Options for generating a new primary invite link for a chat.
 * @typedef {Object} ExportChatInviteLinkOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 */

/**
 * Options for creating an additional invite link for a chat.
 * @typedef {Object} CreateChatInviteLinkOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} [name] Invite link name.
 * @property {number} [expire_date] Date when the link will expire.
 * @property {number} [member_limit] Maximum number of users that can be invited.
 * @property {boolean} [creates_join_request] True, if the link should create a join request instead of immediately joining the chat.
 */

/**
 * Options for editing a non-primary invite link created by the bot.
 * @typedef {Object} EditChatInviteLinkOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} invite_link The invite link to edit.
 * @property {string} [name] New name for the invite link.
 * @property {number} [expire_date] New expiration date for the invite link.
 * @property {number} [member_limit] New maximum number of users that can be invited with the link.
 * @property {boolean} [creates_join_request] True, if the link should now create a join request instead of immediately joining the chat.
 */

/**
 * Options for revoking an invite link created by the bot.
 * @typedef {Object} RevokeChatInviteLinkOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} invite_link The invite link to revoke.
 */

/**
 * Options for managing a chat join request.
 * @typedef {Object} ChatJoinRequestOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user.
 */

/**
 * Options for setting a new chat photo.
 * @typedef {Object} SetChatPhotoOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {InputFile} photo New chat photo.
 */

/**
 * Basic options for operations on a chat.
 * @typedef {Object} deleteChatPhotoOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 */

/**
 * Options for changing the title of a chat.
 * @typedef {Object} SetChatTitleOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} title New chat title.
 */

/**
 * Options for changing the description of a chat.
 * @typedef {Object} SetChatDescriptionOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} [description] New chat description.
 */

/**
 * Options for pinning a message in a chat.
 * @typedef {Object} PinChatMessageOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} message_id Identifier of a message to pin.
 * @property {boolean} [disable_notification] If true, the message will be pinned silently. This means users will not receive a notification.
 */

/**
 * Options for unpinning a chat message.
 * @typedef {Object} UnpinChatMessageOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of a message to unpin. If not specified, the most recent pinned message, by sending date) will be unpinned.
 */

/**
 * Options requiring only a chat ID.
 * @typedef {Object} ChatIdOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 */

/**
 * Options for getting information about a chat member.
 * @typedef {Object} GetChatMemberOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user.
 */

/**
 * Options for getting information about a member of a chat.
 * @typedef {Object} GetChatMemberOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} user_id Unique identifier of the target user.
 */

/**
 * Options for setting a new group sticker set for a supergroup.
 * @typedef {Object} SetChatStickerSetOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} sticker_set_name Name of the sticker set to be set as the group sticker set.
 */

/**
 * Options for creating a topic in a forum supergroup chat.
 * @typedef {Object} CreateForumTopicOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} name Name of the forum topic.
 * @property {number} [icon_color] Color of the forum topic icon.
 * @property {string} [icon_custom_emoji_id] Custom emoji identifier to be used as the icon of the forum topic.
 */

/**
 * Options for editing the name and icon of a forum topic.
 * @typedef {Object} EditForumTopicOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} message_thread_id Unique identifier for the target message thread.
 * @property {string} [name] New name for the forum topic.
 * @property {string} [icon_custom_emoji_id] Custom emoji identifier to be used as the new icon of the forum topic.
 */

/**
 * Options for closing or reopening a topic in a forum supergroup chat.
 * @typedef {Object} ForumTopicManagementOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} message_thread_id Unique identifier for the target message thread.
 */

/**
 * Options for editing the name of the 'General' topic in a forum supergroup chat.
 * @typedef {Object} EditGeneralForumTopicOptions
 * @property {(number|string)} chat_id The unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {string} name New name for the 'General' topic.
 */

/**
 * Options for sending answers to callback queries sent from inline keyboards.
 * @typedef {Object} AnswerCallbackQueryOptions
 * @property {string} callback_query_id Unique identifier for the query to be answered.
 * @property {string} [text] Text of the notification. If not specified, nothing will be shown to the user.
 * @property {boolean} [show_alert] If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
 * @property {string} [url] URL that will be opened by the user's client.
 * @property {number} [cache_time] The maximum amount of time in seconds that the result of the callback query may be cached client-side.
 */

/**
 * Options for getting the list of boosts added to a chat by a user.
 * @typedef {Object} GetUserChatBoostsOptions
 * @property {(number|string)} chat_id The unique identifier for the target chat or username of the target channel.
 * @property {number} user_id Unique identifier of the user whose boosts are being requested.
 */

/**
 * Options for changing the list of the bot's commands.
 * @typedef {Object} SetMyCommandsOptions
 * @property {BotCommand[]} commands An array of bot commands to be set.
 * @property {BotCommandScope} [scope] A JSON-serialized object defining the scope of commands. If not specified, defaults to all private chats.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If not specified, commands will be applied to all languages.
 */

/**
 * Options for deleting the bot's commands for a given scope and language.
 * @typedef {Object} DeleteMyCommandsOptions
 * @property {BotCommandScope} [scope] A JSON-serialized object defining the scope of commands to be deleted. If not specified, commands will be deleted in all private chats.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If not specified, commands will be deleted for all languages.
 */

/**
 * Options for getting the list of the bot's commands.
 * @typedef {Object} GetMyCommandsOptions
 * @property {BotCommandScope} [scope] The scope of commands to retrieve. If not specified, defaults to all commands.
 * @property {string} [language_code] A language code to specify which language's commands to retrieve. If not specified, defaults to all languages.
 */

/**
 * Options for setting the bot's name.
 * @typedef {Object} SetMyNameOptions
 * @property {string} name The new name to set for the bot.
 * @property {string} [language_code] A language code. If specified, sets the name for that specific language.
 */

/**
 * Options for getting the bot's name.
 * @typedef {Object} GetMyNameOptions
 * @property {string} [language_code] A language code to specify which language's name to retrieve. If not specified, gets the default name.
 */

/**
 * Options for getting the bot's description.
 * @typedef {Object} GetMyDescriptionOptions
 * @property {string} [language_code] A language code to specify which language's description to retrieve. If not specified, gets the default description.
 */

/**
 * Options for setting the bot's description.
 * @typedef {Object} SetMyDescriptionOptions
 * @property {string} [description] The new description to set for the bot.
 * @property {string} [language_code] A language code. If specified, sets the description for that specific language.
 */

/**
 * Options for getting the bot's short description.
 * @typedef {Object} GetMyShortDescriptionOptions
 * @property {string} [language_code] A language code to specify which language's short description to retrieve. If not specified, gets the default short description.
 */

/**
 * Options for setting the chat menu button.
 * @typedef {Object} SetChatMenuButtonOptions
 * @property {number} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername. Defaults to the bot's chat.
 * @property {MenuButton} [menu_button] The menu button to be set. If not specified, the button is removed.
 */

/**
 * Options for getting the chat menu button.
 * @typedef {Object} GetChatMenuButtonOptions
 * @property {number} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername. Defaults to the bot's chat.
 */

/**
 * Options for setting the bot's default administrator rights.
 * @typedef {Object} SetMyDefaultAdministratorRightsOptions
 * @property {ChatAdministratorRights} [rights] The default administrator rights to be set.
 * @property {boolean} [for_channels] Specifies whether the rights are for channels. Defaults to false, for groups.
 */

/**
 * Options for getting the bot's default administrator rights.
 * @typedef {Object} GetMyDefaultAdministratorRightsOptions
 * @property {boolean} [for_channels] Specifies whether to get the rights for channels. Defaults to false, for groups.
 */

/**
 * Options for editing the text of messages.
 * @typedef {Object} EditMessageTextOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message to edit.
 * @property {string} [inline_message_id] Identifier of the inline message to edit.
 * @property {string} text New text of the message.
 * @property {Format} [parse_mode] Format of the text: Markdown or HTML.
 * @property {MessageEntity[]} [entities] List of special entities that appear in the message text, which can be specified instead of parse_mode.
 * @property {LinkPreviewOptions} [link_preview_options] Options for how links in the message should be previewed.
 * @property {InlineKeyboardMarkup} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard.
 */

/**
 * Options for editing the caption of a message.
 * @typedef {Object} EditMessageCaptionOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message to edit.
 * @property {string} [inline_message_id] Identifier of the inline message.
 * @property {string} [caption] New caption of the message.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */

/**
 * Options for editing the media content of messages.
 * @typedef {Object} EditMessageMediaOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message to edit.
 * @property {string} [inline_message_id] Identifier of the inline message.
 * @property {InputMedia} media New media content of the message.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */

/**
 * Options for editing the live location of a message.
 * @typedef {Object} EditMessageLiveLocationOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message to edit.
 * @property {string} [inline_message_id] Identifier of the inline message.
 * @property {number} latitude Latitude of new location.
 * @property {number} longitude Longitude of new location.
 * @property {number} [horizontal_accuracy] The radius of uncertainty for the location, measured in meters; 0-1500.
 * @property {number} [heading] Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {number} [proximity_alert_radius] Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */

/**
 * Options for stopping a live location message.
 * @typedef {Object} StopMessageLiveLocationOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message to stop showing the live location.
 * @property {string} [inline_message_id] Identifier of the inline message to stop showing the live location.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */

/**
 * Options for stopping a live location message.
 * @typedef {Object} StopMessageLiveLocationOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message with live location to stop.
 * @property {string} [inline_message_id] Identifier of the inline message with live location to stop.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new inline keyboard.
 */

/**
 * Options for editing the reply markup of messages.
 * @typedef {Object} EditMessageReplyMarkupOptions
 * @property {(number|string)} [chat_id] Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_id] Identifier of the message to edit.
 * @property {string} [inline_message_id] Identifier of the inline message to edit.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new inline keyboard.
 */

/**
 * Options for stopping a poll.
 * @typedef {Object} StopPollOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} message_id Identifier of the original message with the poll.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new inline keyboard.
 */

/**
 * Options for deleting a message.
 * @typedef {Object} DeleteMessageOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} message_id Identifier of the message to delete.
 */

/**
 * Options for deleting multiple messages.
 * @typedef {Object} DeleteMessagesOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number[]} message_ids Array of message identifiers to delete.
 */

/**
 * Options for sending a sticker.
 * @typedef {Object} SendStickerOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel, in the format @channelusername.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {(InputFile|string)} sticker Sticker to send. Can be a file_id as String to send a sticker that exists on the Telegram servers, or a file from the filesystem.
 * @property {string} [emoji] Emoji associated with the sticker.
 * @property {boolean} [disable_notification] Sends the sticker silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent sticker from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.
 */

/**
 * Options for getting a sticker set.
 * @typedef {Object} GetStickerSetOptions
 * @property {string} name Name of the sticker set.
 */

/**
 * Options for getting custom emoji stickers.
 * @typedef {Object} GetCustomEmojiStickersOptions
 * @property {string[]} custom_emoji_ids List of custom emoji identifiers to get stickers for.
 */

/**
 * Options for uploading a sticker file.
 * @typedef {Object} UploadStickerFileOptions
 * @property {number} user_id User identifier of the sticker file owner.
 * @property {InputFile} sticker Sticker file to upload.
 * @property {string} sticker_format Format of the sticker file, e.g., "webp".
 */

/**
 * Options for creating a new sticker set.
 * @typedef {Object} CreateNewStickerSetOptions
 * @property {number} user_id User identifier of the sticker set owner.
 * @property {string} name Unique name of the sticker set.
 * @property {string} title Sticker set title, 1-64 characters.
 * @property {InputSticker[]} stickers Array of stickers to be added to the set.
 * @property {string} sticker_format Format of the stickers in the set, e.g., "webp".
 * @property {string} [sticker_type] Type of the stickers in the set.
 * @property {boolean} [needs_repainting] True if the sticker set needs repainting.
 */

/**
 * Options for adding a new sticker to a set.
 * @typedef {Object} AddStickerToSetOptions
 * @property {number} user_id Unique identifier of the target user.
 * @property {string} name Name of the sticker set to which the sticker will be added.
 * @property {InputSticker} sticker The sticker to be added to the set.
 */

/**
 * Options for setting the position of a sticker in the set.
 * @typedef {Object} SetStickerPositionInSetOptions
 * @property {string} sticker File identifier of the sticker.
 * @property {number} position New sticker position in the set, zero-based.
 */

/**
 * Options for deleting a sticker from a set.
 * @typedef {Object} DeleteStickerFromSetOptions
 * @property {string} sticker File identifier of the sticker to be deleted.
 */

/**
 * Options for setting the emoji list for a sticker.
 * @typedef {Object} SetStickerEmojiListOptions
 * @property {string} sticker File identifier of the sticker.
 * @property {string[]} emoji_list A list of emojis associated with the sticker.
 */

/**
 * Options for setting keywords for a sticker.
 * @typedef {Object} SetStickerKeywordsOptions
 * @property {string} sticker File identifier of the sticker.
 * @property {string[]} [keywords] A list of keywords associated with the sticker.
 */

/**
 * Options for setting the mask position of a sticker.
 * @typedef {Object} SetStickerMaskPositionOptions
 * @property {string} sticker File identifier of the sticker.
 * @property {MaskPosition} [mask_position] The mask position to be set for the sticker.
 */

/**
 * Options for setting the title of a sticker set.
 * @typedef {Object} SetStickerSetTitleOptions
 * @property {string} name The name of the sticker set.
 * @property {string} title The new title of the sticker set.
 */

/**
 * Options for setting the thumbnail of a sticker set.
 * @typedef {Object} SetStickerSetThumbnailOptions
 * @property {string} name The name of the sticker set.
 * @property {number} user_id The user ID of the sticker set owner.
 * @property {(InputFile|string)} [thumbnail] The new thumbnail of the sticker set. Can be a file ID or an actual file.
 */

/**
 * Options for setting the thumbnail of a custom emoji sticker set.
 * @typedef {Object} SetCustomEmojiStickerSetThumbnailOptions
 * @property {string} name The name of the custom emoji sticker set.
 * @property {string} [custom_emoji_id] The ID of the custom emoji to be used as the new thumbnail.
 */

/**
 * Options for deleting a sticker set.
 * @typedef {Object} DeleteStickerSetOptions
 * @property {string} name The name of the sticker set to be deleted.
 */

/**
 * Options for answering an inline query.
 * @typedef {Object} AnswerInlineQueryOptions
 * @property {string} inline_query_id Unique identifier for the answered query.
 * @property {InlineQueryResult[]} results A JSON-serialized array of results for the inline query.
 * @property {number} [cache_time] The maximum amount of time in seconds that the result of the inline query may be cached on the server.
 * @property {boolean} [is_personal] Pass true if results may be cached on the server side only for the user that sent the query.
 * @property {string} [next_offset] Pass the offset that a client should send in the next query with the same text to receive more results.
 * @property {InlineQueryResultsButton} [button] An optional button that will be shown to the user in the results.
 */

/**
 * Options for answering a Web App query.
 * @typedef {Object} AnswerWebAppQueryOptions
 * @property {string} web_app_query_id Unique identifier for the query to be answered.
 * @property {InlineQueryResult} result The result for the query.
 */

/**
 * Options for sending an invoice.
 * @typedef {Object} SendInvoiceOptions
 * @property {(number|string)} chat_id Unique identifier for the target chat or username of the target channel.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for channels.
 * @property {string} title Product name.
 * @property {string} description Product description.
 * @property {string} payload Bot-defined invoice payload.
 * @property {string} provider_token Payments provider token.
 * @property {string} currency Three-letter ISO 4217 currency code.
 * @property {LabeledPrice[]} prices Price breakdown, a list of components.
 * @property {number} [max_tip_amount] The maximum accepted tip amount in the smallest units of the currency.
 * @property {number[]} [suggested_tip_amounts] Array of suggested tip amounts in the smallest units of the currency.
 * @property {string} [start_parameter] Unique deep-linking parameter for the payment checkout.
 * @property {string} [provider_data] JSON-encoded data about the invoice, which will be shared with the payment provider.
 * @property {string} [photo_url] URL of the product photo for the invoice.
 * @property {number} [photo_size] Size of the product photo.
 * @property {number} [photo_width] Width of the product photo.
 * @property {number} [photo_height] Height of the product photo.
 * @property {boolean} [need_name] Whether you need the user's full name.
 * @property {boolean} [need_phone_number] Whether you need the user's phone number.
 * @property {boolean} [need_email] Whether you need the user's email.
 * @property {boolean} [need_shipping_address] Whether you need the user's shipping address.
 * @property {boolean} [send_phone_number_to_provider] Whether the user's phone number should be sent to provider.
 * @property {boolean} [send_email_to_provider] Whether the user's email should be sent to provider.
 * @property {boolean} [is_flexible] Whether the final price depends on the shipping method.
 * @property {boolean} [disable_notification] Sends the invoice silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent invoice from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for creating an invoice link.
 * @typedef {Object} CreateInvoiceLinkOptions
 * @property {string} title Product name.
 * @property {string} description Product description.
 * @property {string} payload Bot-defined invoice payload.
 * @property {string} provider_token Payments provider token.
 * @property {string} currency Three-letter ISO 4217 currency code.
 * @property {LabeledPrice[]} prices Price breakdown, a list of components.
 * @property {number} [max_tip_amount] The maximum accepted tip amount in the smallest units of the currency.
 * @property {number[]} [suggested_tip_amounts] Array of suggested tip amounts in the smallest units of the currency.
 * @property {string} [provider_data] JSON-encoded data about the invoice, which will be shared with the payment provider.
 * @property {string} [photo_url] URL of the product photo for the invoice.
 * @property {number} [photo_size] Size of the product photo.
 * @property {number} [photo_width] Width of the product photo.
 * @property {number} [photo_height] Height of the product photo.
 * @property {boolean} [need_name] Whether you need the user's full name.
 * @property {boolean} [need_phone_number] Whether you need the user's phone number.
 * @property {boolean} [need_email] Whether you need the user's email.
 * @property {boolean} [need_shipping_address] Whether you need the user's shipping address.
 * @property {boolean} [send_phone_number_to_provider] Whether the user's phone number should be sent to provider.
 * @property {boolean} [send_email_to_provider] Whether the user's email should be sent to provider.
 * @property {boolean} [is_flexible] Whether the final price depends on the shipping method.
 */

/**
 * Options for sending a game.
 * @typedef {Object} SendGameOptions
 * @property {number} chat_id Unique identifier for the target chat.
 * @property {string} game_short_name Short name of the game to be sent.
 * @property {number} [message_thread_id] Unique identifier for the target message thread, only for messages in threads.
 * @property {boolean} [disable_notification] Sends the game message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent game from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
 */

/**
 * Options for setting a user's score in a game.
 * @typedef {Object} SetGameScoreOptions
 * @property {number} user_id User identifier.
 * @property {number} score New score to set.
 * @property {boolean} [force] Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters.
 * @property {boolean} [disable_edit_message] Pass True, if the game message should not be automatically edited to include the current scoreboard.
 * @property {number} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat.
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the sent message.
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message.
 */

/**
 * Options for retrieving high scores for a game.
 * @typedef {Object} GetGameHighScoresOptions
 * @property {number} user_id User identifier.
 * @property {number} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat.
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the sent message.
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message.
 */

/**
 * Options for informing a user of errors with their Telegram Passport data.
 * @typedef {Object} SetPassportDataErrorsOptions
 * @property {number} user_id User identifier.
 * @property {PassportElementError[]} errors An array of objects representing errors in the Telegram Passport elements that the user needs to correct.
 */

/**
 * @typedef {Object} ctx
 * @property {function(): Update} update - incoming update.
 * @property {function(): Message} messageUpdate - New incoming message of any kind - text, photo, sticker, etc.
 * @property {function(): Message} editedMessageUpdate - Message edit notification for known messages.
 * @property {function(): Message} channelPostUpdate - New incoming channel post of any kind - text, photo, sticker, etc.
 * @property {function(): Message} editedChannelPostUpdate - Channel post edit notification for known posts.
 * @property {function(): MessageReactionUpdated} messageReactionUpdate - User changed a message reaction; requires bot as admin.
 * @property {function(): MessageReactionCountUpdated} messageReactionCountUpdate - Grouped anonymous message reaction changes.
 * @property {function(): InlineQuery} inlineQueryUpdate - New incoming inline query
 * @property {function(): ChosenInlineResult} chosenInlineResultUpdate - User's choice from an inline query sent to chat.
 * @property {function(): CallbackQuery} callbackQueryUpdate - New incoming callback query
 * @property {function(): ShippingQuery} shippingQueryUpdate - New incoming shipping query. Only for invoices with flexible price
 * @property {function(): PreCheckoutQuery} preCheckoutQueryUpdate - New incoming pre-checkout query. Contains full information about checkout.
 * @property {function(): Poll} pollUpdate - Notification of new poll state; for stopped polls and those sent by the bot.
 * @property {function(): PollAnswer} pollAnswerUpdate - User changed their vote in a non-anonymous poll sent by the bot.
 * @property {function(): ChatMemberUpdated} myChatMemberUpdate - Bot's chat member status updated in a chat.
 * @property {function(): ChatMemberUpdated} chatMemberUpdate - Chat member's status updated; requires bot admin.
 * @property {function(): ChatJoinRequest} chatJoinRequestUpdate - Chat join request sent; requires bot's "can_invite_users" right.
 * @property {function(): ChatBoostUpdated} chatBoostUpdate - Chat boost added or changed; requires bot admin.
 * @property {function(): ChatBoostRemoved} removedChatBoostUpdate - Chat boost removed; requires bot admin.
 * @property {function(): string} updateType - get update type.
 * @property {function(): Chat} chat - chat.
 * @property {function(): From} from - user or bot.
 * @property {function(): Message} message - message.
 * @property {function(): string} chatId - Unique identifier of chat.
 * @property {function(): string} userId - Unique identifier of user.
 * @property {function(): number} messageId - Unique identifier of message.
 * @property {function(): User} getMe - for testing your bot's authentication token
 * @property {function(): boolean} logOut - Use this method to log out from the cloud Bot API server before launching the bot locally
 * @property {function(): boolean} close - Use this method to close the bot instance before moving it from one local server to another.
 * @property {function(): WebhookInfo} getWebhookInfo - the current status of a webhook.
 *
 * @property {function(string):SheetOperations} sheet - Method to access sheet operations by sheet name.
 *
 * @property {function(SendMessageOptions): Message} sendMessage - send text messages.
 * @property {function(ForwardMessageOptions): Message} forwardMessage - forward messages of any kind.
 * @property {function(ForwardMessagesOptions): MessageId[]} forwardMessages - forward multiple messages of any kind.
 * @property {function(CopyMessageOptions): MessageId} copyMessage - copy messages of any kind.
 * @property {function(CopyMessagesOptions): MessageId[]} copyMessages - Copies messages of any kind.
 * @property {function(SendPhotoOptions): Message} sendPhoto - Sends photos.
 * @property {function(SendAudioOptions): Message} sendAudio - Sends an audio file.
 * @property {function(SendDocumentOptions): Message} sendDocument - Sends a general file.
 * @property {function(SendVideoOptions): Message} sendVideo - Sends a video file.
 * @property {function(SendAnimationOptions): Message} sendAnimation - Sends an animation file.
 * @property {function(SendVoiceOptions): Message} sendVoice - Sends an audio file as a voice message.
 * @property {function(SendVideoNoteOptions): Message} sendVideoNote - Sends a video message.
 * @property {function(SendMediaGroupOptions): Message[]} sendMediaGroup - Sends a group of photos, videos, documents or audios as an album.
 * @property {function(SendLocationOptions): Message} sendLocation - Sends point on the map.
 * @property {function(SendVenueOptions): Message} sendVenue - Sends information about a venue.
 * @property {function(SendContactOptions): Message} sendContact - Sends phone contacts.
 * @property {function(SendPollOptions): Message} sendPoll - Sends a native poll.
 * @property {function(SendDiceOptions): Message} sendDice - Sends an animated emoji that will display a random value.
 * @property {function(SendChatActionOptions): boolean} sendChatAction - Tells the user that something is happening on the bot's side.
 * @property {function(SetMessageReactionOptions): boolean} setMessageReaction - Changes the chosen reactions on a message.
 * @property {function(GetUserProfilePhotosOptions): UserProfilePhotos} getUserProfilePhotos - Gets a list of profile pictures for a user.
 * @property {function(GetFileOptions): File} getFile - Gets basic information about a file.
 * @property {function(BanChatMemberOptions): boolean} banChatMember - Bans a user in a group, supergroup, or channel.
 * @property {function(UnbanChatMemberOptions): boolean} unbanChatMember - Unbans a previously banned user in a supergroup or channel.
 * @property {function(RestrictChatMemberOptions): boolean} restrictChatMember - Restricts a user in a supergroup.
 * @property {function(PromoteChatMemberOptions): boolean} promoteChatMember - Promotes or demotes a user in a supergroup or channel.
 * @property {function(SetChatAdministratorCustomTitleOptions): boolean} setChatAdministratorCustomTitle - Sets a custom title for an administrator in a supergroup.
 * @property {function(BanChatSenderChatOptions): boolean} banChatSenderChat - Bans a channel chat in a supergroup or channel.
 * @property {function(UnbanChatSenderChatOptions): boolean} unbanChatSenderChat - Unbans a previously banned channel chat.
 * @property {function(SetChatPermissionsOptions): boolean} setChatPermissions - Sets default chat permissions for all members.
 * @property {function(ExportChatInviteLinkOptions): string} exportChatInviteLink - Generates a new primary invite link for a chat.
 * @property {function(CreateChatInviteLinkOptions): ChatInviteLink} createChatInviteLink - Creates an additional invite link for a chat.
 * @property {function(EditChatInviteLinkOptions): ChatInviteLink} editChatInviteLink - Edits a non-primary invite link created by the bot.
 * @property {function(RevokeChatInviteLinkOptions): ChatInviteLink} revokeChatInviteLink - Revokes an invite link created by the bot.
 * @property {function(ChatJoinRequestOptions): object} approveChatJoinRequest - Approves a chat join request.
 * @property {function(ChatJoinRequestOptions): object} declineChatJoinRequest - Declines a chat join request.
 * @property {function(SetChatPhotoOptions): object} setChatPhoto - Sets a new chat photo.
 * @property {function(deleteChatPhotoOptions): object} deleteChatPhoto - Deletes the chat photo.
 * @property {function(SetChatTitleOptions): Object} setChatTitle - Changes the title of a chat.
 * @property {function(SetChatDescriptionOptions): Object} setChatDescription - Changes the description of a chat.
 * @property {function(PinChatMessageOptions): Object} pinChatMessage - Pins a message in a chat.
 * @property {function(UnpinChatMessageOptions): Object} unpinChatMessage - Removes a message from the list of pinned messages in a chat.
 * @property {function(ChatIdOptions): Object} unpinAllChatMessages - Clears the list of pinned messages in a chat.
 * @property {function(ChatIdOptions): Object} leaveChat - Bot leaves a group, supergroup, or channel.
 * @property {function(ChatIdOptions): Chat} getChat - Gets information about the chat.
 * @property {function(ChatIdOptions): ChatMember[]} getChatAdministrators - Gets a list of administrators in a chat.
 * @property {function(ChatIdOptions): number} getChatMemberCount - Gets the number of members in a chat.
 * @property {function(GetChatMemberOptions): ChatMember} getChatMember - Gets information about a member of a chat.
 * @property {function(SetChatStickerSetOptions): boolean} setChatStickerSet - Sets a new group sticker set for a supergroup.
 * @property {function(ChatIdOptions): boolean} deleteChatStickerSet - Deletes a group sticker set from a supergroup.
 * @property {function(): Sticker[]} getForumTopicIconStickers - Gets custom emoji stickers for forum topic icons.
 * @property {function(CreateForumTopicOptions): ForumTopic} createForumTopic - Creates a topic in a forum supergroup chat.
 * @property {function(EditForumTopicOptions): boolean} editForumTopic - Edits name and icon of a forum topic.
 * @property {function(ForumTopicManagementOptions): boolean} closeForumTopic - Closes an open topic in a forum supergroup chat.
 * @property {function(ForumTopicManagementOptions): boolean} reopenForumTopic - Reopens a closed topic in a forum supergroup chat.
 * @property {function(ForumTopicManagementOptions): boolean} deleteForumTopic - Deletes a forum topic along with all its messages in a forum supergroup chat.
 * @property {function(ForumTopicManagementOptions): boolean} unpinAllForumTopicMessages - Clears the list of pinned messages in a forum topic.
 * @property {function(EditGeneralForumTopicOptions): boolean} editGeneralForumTopic - Edits the name of the 'General' topic in a forum supergroup chat.
 * @property {function(ChatIdOptions): Object} closeGeneralForumTopic - Closes an open 'General' topic in a forum supergroup chat.
 * @property {function(ChatIdOptions): Object} reopenGeneralForumTopic - Reopens a closed 'General' topic in a forum supergroup chat.
 * @property {function(ChatIdOptions): Object} hideGeneralForumTopic - Hides the 'General' topic in a forum supergroup chat.
 * @property {function(ChatIdOptions): Object} unhideGeneralForumTopic - Unhides the 'General' topic in a forum supergroup chat.
 * @property {function(ChatIdOptions): boolean} unpinAllGeneralForumTopicMessages - Clears the list of pinned messages in a General forum topic.
 * @property {function(AnswerCallbackQueryOptions): boolean} answerCallbackQuery - Sends answers to callback queries sent from inline keyboards.
 * @property {function(GetUserChatBoostsOptions): UserChatBoosts} getUserChatBoosts - Gets the list of boosts added to a chat by a user.
 * @property {function(SetMyCommandsOptions): boolean} setMyCommands - Changes the list of the bot's commands.
 * @property {function(DeleteMyCommandsOptions): void} deleteMyCommands - Deletes the bot's commands for a given scope and language.
 * @property {function(GetMyCommandsOptions): Array<BotCommand>} getMyCommands - Gets the current list of the bot's commands.
 * @property {function(SetMyNameOptions): void} setMyName - Changes the bot's name.
 * @property {function(GetMyNameOptions): BotName} getMyName - Gets the current bot name.
 * @property {function(SetMyDescriptionOptions): boolean} setMyDescription - Changes the bot's description.
 * @property {function(GetMyDescriptionOptions): BotDescription} getMyDescription - Gets the current bot description.
 * @property {function(SetMyDescriptionOptions): boolean} setMyShortDescription - Changes the bot's short description.
 * @property {function(GetMyShortDescriptionOptions): BotShortDescription} getMyShortDescription - Gets the current bot short description.
 * @property {function(SetChatMenuButtonOptions): boolean} setChatMenuButton - Changes the bot's menu button.
 * @property {function(GetChatMenuButtonOptions): MenuButton} getChatMenuButton - Gets the current bot's menu button.
 * @property {function(SetMyDefaultAdministratorRightsOptions): boolean} setMyDefaultAdministratorRights - Changes the default administrator rights.
 * @property {function(GetMyDefaultAdministratorRightsOptions): ChatAdministratorRights} getMyDefaultAdministratorRights - Gets the current default administrator rights.
 * @property {function(EditMessageTextOptions): Message} editMessageText - Edits text and game messages.
 * @property {function(EditMessageCaptionOptions): Message} editMessageCaption - Edits captions of messages.
 * @property {function(EditMessageMediaOptions): Message} editMessageMedia - Edits animation, audio, document, photo or video messages.
 * @property {function(EditMessageLiveLocationOptions): Message} editMessageLiveLocation - Edits live location messages.
 * @property {function(StopMessageLiveLocationOptions): (Message|boolean)} stopMessageLiveLocation - Stops updating a live location message.
 * @property {function(EditMessageReplyMarkupOptions): (Message|boolean)} editMessageReplyMarkup - Edits only the reply markup of messages.
 * @property {function(StopPollOptions): Poll} stopPoll - Stops a poll.
 * @property {function(DeleteMessageOptions): boolean} deleteMessage - Deletes a message.
 * @property {function(DeleteMessagesOptions): object} deleteMessages - Deletes multiple messages.
 * @property {function(SendStickerOptions): Message} sendSticker - Sends a sticker.
 * @property {function(GetStickerSetOptions): StickerSet} getStickerSet - Gets a sticker set.
 * @property {function(GetCustomEmojiStickersOptions): Sticker[]} getCustomEmojiStickers - Gets information about custom emoji stickers.
 * @property {function(UploadStickerFileOptions): File} uploadStickerFile - Uploads a sticker file.
 * @property {function(CreateNewStickerSetOptions): boolean} createNewStickerSet - Creates a new sticker set.
 * @property {function(AddStickerToSetOptions): boolean} addStickerToSet - Adds a new sticker to a set.
 * @property {function(SetStickerPositionInSetOptions): boolean} setStickerPositionInSet - move a sticker in a set.
 * @property {function(DeleteStickerFromSetOptions): boolean} deleteStickerFromSet - delete a sticker from a set.
 * @property {function(SetStickerEmojiListOptions): boolean} setStickerEmojiList - change the list of emoji assigned to a regular or custom emoji sticker.
 * @property {function(SetStickerKeywordsOptions): boolean} setStickerKeywords - change search keywords assigned to a regular or custom emoji sticker.
 * @property {function(SetStickerMaskPositionOptions): boolean} setStickerMaskPosition - change the mask position of a mask sticker.
 * @property {function(SetStickerSetTitleOptions): boolean} setStickerSetTitle - set the title of a created sticker set.
 * @property {function(SetStickerSetThumbnailOptions): boolean} setStickerSetThumbnail - set the thumbnail of a regular or mask sticker set.
 * @property {function(SetCustomEmojiStickerSetThumbnailOptions): boolean} setCustomEmojiStickerSetThumbnail - set the thumbnail of a custom emoji sticker set.
 * @property {function(DeleteStickerSetOptions): boolean} deleteStickerSet - delete a sticker set.
 * @property {function(AnswerInlineQueryOptions): boolean} answerInlineQuery - send answers to an inline query.
 * @property {function(AnswerWebAppQueryOptions): boolean} answerWebAppQuery - set the result of an interaction with a `Web App` and send a corresponding message on behalf of the user to the chat from which the query originated.
 * @property {function(SendInvoiceOptions): Message} sendInvoice - send invoices.
 * @property {function(CreateInvoiceLinkOptions): string} createInvoiceLink - create a link for an invoice.
 * @property {function(SendGameOptions): Message} sendGame - send a game.
 * @property {function(SetGameScoreOptions): (Message | boolean)} setGameScore - set the score of the specified user in a game message.
 * @property {function(GetGameHighScoresOptions): GameHighScore[]} getGameHighScores - get data for high score tables.
 * @property {function(SetPassportDataErrorsOptions): boolean} setPassportDataErrors - Informs user of errors in Telegram Passport elements.
 * @property {function(ReplyOptions): Message} reply
 * @property {function(ReplyWithFormattedTextOptions): Message} replyWithHtml
 * @property {function(ReplyWithFormattedTextOptions): Message} replyWithMarkdown
 * @property {function(ReplyWithPhotoOptions): Message} replyWithPhoto - reply photo to the current chat.
 * @property {function(ReplyWithChatActionOptions): boolean} replyWithChatAction - reply chat action to the current chat.
 * @property {function(ReplyWithEditedMessageOptions): Message} replyWithEditedMessage - reply edited message to the current chat.
 *
 *
 * @property {function(): Object} getTSession - Gets the temporary session object.
 * @property {function(string): *} getTSessionValue - Gets a value from the temporary session by key.
 * @property {function(string, *, number): void} setTSessionValue - Sets a value in the temporary session with an optional expiry time.
 * @property {function(Object, number): void} setTSessionValues - Sets multiple values in the temporary session with an optional expiry time.
 * @property {function(string): void} removeTSessionValue - Removes a value from the temporary session by key.
 * @property {function(): void} deleteTSession - Deletes the temporary session.
 *
 * @property {function(string): void} setStage - Sets the current stage.
 * @property {function(): void} clearStage - Clears the current stage.
 * @property {function(): string} getStage - Gets the current stage.
 *
 * @property {function(): Object} getPSession - Gets the persistent session object.
 * @property {function(string): *} getPSessionValue - Gets a value from the persistent session by key.
 * @property {function(string, *): void} setPSessionValue - Sets a value in the persistent session.
 * @property {function(Object): void} setPSessionValues - Sets multiple values in the persistent session.
 * @property {function(string): void} removePSessionValue - Removes a value from the persistent session by key.
 * @property {function(): void} deletePSession - Deletes the persistent session.
 *
 * @property {function(string): *} getPCacheValue - Gets a value from the persistent cache by key.
 * @property {function(): Object} getPCache - Gets the entire persistent cache object.
 * @property {function(string, *): void} setPCacheValue - Sets a value in the persistent cache.
 * @property {function(Object): void} setPCacheValues - Sets multiple values in the persistent cache.
 * @property {function(string): void} removePCacheValue - Removes a value from the persistent cache by key.
 * @property {function(): void} deletePCache - Deletes the persistent cache.
 *
 * @property {function(string): *} getTCacheValue - Gets a value from the temporary cache by key.
 * @property {function(string, *, number): void} setTCacheValue - Sets a value in the temporary cache with an optional expiry time.
 * @property {function(Array.<string>): Object} getTCacheValues - Gets multiple values from the temporary cache.
 * @property {function(Object, number): void} setTCacheValues - Sets multiple values in the temporary cache with an optional expiry time.
 * @property {function(string): void} removeTCacheValue - Removes a value from the temporary cache by key.
 * @property {function(Array.<string>): void} removeTCacheValues - Removes multiple values from the temporary cache.
 *
 * @property {function(string, string, string, Object=): void} sendEmail - Sends an email with optional parameters.
 *
 */

/**
 * Options for replying with a message.
 * @typedef {Object} ReplyOptions
 * @property {string} text Text of the message to be sent.
 * @property {Format} [parse_mode] Format of the text: Markdown or HTML.
 * @property {MessageEntity[]} [entities] List of special entities that appear in message text, which can be specified instead of parse_mode.
 * @property {LinkPreviewOptions} [link_preview_options] Options for how links in the message should be previewed.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * Options for sending a message to a chat.
 * @typedef {Object} SendMessageOptions
 * @property {number|string} chat_id - The unique identifier for the target chat or username of the target channel. This can be a numeric ID or a string in the format of @channelusername.
 * @property {number} [message_thread_id] - Unique identifier for the target message thread.
 * @property {string} text - Text of the message to be sent.
 * @property {Format} [parse_mode] - Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message.
 * @property {MessageEntity[]} [entities] - List of special entities that appear in message text, which can be specified instead of parse_mode.
 * @property {LinkPreviewOptions} [link_preview_options] - Options for how links in the message should be previewed.
 * @property {boolean} [disable_notification] - Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] - Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] - Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard or to force a reply from the user.
 */

/**
 * Options for replying with a message formatted in HTML or Markdown.
 * @typedef {Object} ReplyWithFormattedTextOptions
 * @property {string} text Text of the message to be sent, formatted in HTML or Markdown.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.
 */

/**
 * Options for replying with chat action.
 * @typedef {Object} ReplyWithChatActionOptions
 * @property {string} action Type of action to broadcast. Choose one, depending on what the user is about to receive.
 * @property {boolean} [disable_notification] Sends the chat action silently. Users will see the action with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent action from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 */

/**
 * Options for editing and replying with a message.
 * @typedef {Object} ReplyWithEditedMessageOptions
 * @property {string} text Text of the message to be edited and sent.
 * @property {Format} [parse_mode] Format of the text: Markdown or HTML.
 * @property {MessageEntity[]} [entities] List of special entities that appear in message text, which can be specified instead of parse_mode.
 * @property {LinkPreviewOptions} [link_preview_options] Options for how links in the message should be previewed.
 * @property {InlineKeyboardMarkup} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard.
 */

/**
 * Options for replying with a photo.
 * @typedef {Object} ReplyWithPhotoOptions
 * @property {(InputFile|string)} photo Unique file identifier of the photo to send or the photo itself.
 * @property {string} [caption] Caption for the photo, 0-1024 characters after entities parsing.
 * @property {Format} [parse_mode] Format of the caption text: Markdown or HTML.
 * @property {MessageEntity[]} [caption_entities] List of special entities that appear in the caption, which can be specified instead of parse_mode.
 * @property {boolean} [has_spoiler] Marks the caption as containing a spoiler.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the content of the sent message from forwarding and saving.
 * @property {ReplyParameters} [reply_parameters] Additional parameters for replying to messages.
 * @property {(InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user.
 */

/**
 * the current status of a webhook.
 * @typedef {Object} WebhookInfo
 * @property {string} url - Webhook URL.
 * @property {boolean} has_custom_certificate - True, if a custom certificate was provided for webhook certificate checks.
 * @property {number} pending_update_count - Number of updates awaiting delivery.
 * @property {string} [ip_address] - Currently used webhook IP address.
 * @property {number} [last_error_date] - Unix time for the most recent error.
 * @property {string} [last_error_message] - Error message in human-readable format for the most recent error.
 * @property {number} [last_synchronization_error_date] - Unix time of the most recent error happened when trying to synchronize available updates.
 * @property {number} [max_connections] - The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
 * @property {string[]} [allowed_updates] - A list of update types the bot is subscribed to
 */

/**
 * represents a unique message identifier.
 * @typedef {Object} MessageId
 * @property {number} message_id - Unique message identifier
 */

/**
 * message that was deleted or is otherwise inaccessible to the bot.
 * @typedef {Object} InaccessibleMessage
 * @property {Chat} chat - Chat the message belonged to
 * @property {number} message_id - Unique message identifier inside the chat
 * @property {number} date - Always 0. The field can be used to differentiate regular and inaccessible messages.
 */

/**
 * message that can be inaccessible to the bot.
 * @typedef {Message | InaccessibleMessage} MaybeInaccessibleMessage
 */

/**
 * @typedef {Object} ReplyParameters
 * @property {number} message_id - Identifier of the message.
 * @property {(number|string)} [chat_id] - unique identifier for the chat or username of the channel.
 * @property {boolean} [allow_sending_without_reply] - Pass True if the message should be sent even if the message to be replied to is not found.
 * @property {string} [quote] - Quoted part of the message to be replied to
 * @property {string} [quote_parse_mode] - Mode for parsing entities in the quote.
 * @property {Array.<MessageEntity>} [quote_entities] - list of special entities that appear in the quote.
 * @property {number} [quote_position] - Position of the quote in the original message in UTF-16 code units.
 */

/**
 * the origin of a message.
 * @typedef {MessageOriginUser|MessageOriginHiddenUser|MessageOriginChat|MessageOriginChannel} MessageOrigin
 */

/**
 * originally sent by a known user.
 * @typedef {Object} MessageOriginUser
 * @property {string} type - Type of the message origin, always "user".
 * @property {number} date - Date the message was sent originally in Unix time.
 * @property {User} sender_user - User that sent the message originally.
 */

/**
 * originally sent by an unknown user.
 * @typedef {Object} MessageOriginHiddenUser
 * @property {string} type - Type of the message origin, always "hidden_user".
 * @property {number} date - Date the message was sent originally in Unix time.
 * @property {string} sender_user_name - Name of the user that sent the message originally.
 */

/**
 * originally sent on behalf of a chat to a group chat.
 * @typedef {Object} MessageOriginChat
 * @property {string} type - Type of the message origin, always "chat".
 * @property {number} date - Date the message was sent originally in Unix time.
 * @property {Chat} sender_chat - Chat that sent the message originally.
 * @property {string} [author_signature] - messages originally sent by an anonymous chat administrator.
 */

/**
 * originally sent to a channel chat.
 * @typedef {Object} MessageOriginChannel
 * @property {string} type - Type of the message origin, always "channel".
 * @property {number} date - Date the message was sent originally in Unix time.
 * @property {Chat} chat - Channel chat to which the message was originally sent.
 * @property {number} message_id - Unique message identifier inside the chat.
 * @property {string} [author_signature] - Signature of the original post author.
 */

/**
 * a boost added to a chat or changed.
 * @typedef {Object} ChatBoostUpdated
 * @property {Chat} chat - Chat which was boosted.
 * @property {ChatBoost} boost - Information about the chat boost.
 */

/**
 * a boost removed from a chat.
 * @typedef {Object} ChatBoostRemoved
 * @property {Chat} chat - Chat which was boosted
 * @property {string} boost_id - Unique identifier of the boost
 * @property {number} remove_date - Point in time (Unix timestamp) when the boost was removed
 * @property {ChatBoostSource} source - Source of the removed boost
 */

/**
 * answer of a user in a non-anonymous poll.
 * @typedef {Object} PollAnswer
 * @property {string} poll_id - Unique poll identifier.
 * @property {Chat} [voter_chat] - The chat that changed the answer to the poll, if the voter is anonymous.
 * @property {User} [user] - The user that changed the answer to the poll, if the voter isn't anonymous.
 * @property {Array.<number>} option_ids - 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
 */

/**
 * changes in the status of a chat member.
 * @typedef {Object} ChatMemberUpdated
 * @property {Chat} chat - Chat the user belongs to.
 * @property {User} from - Performer of the action, which resulted in the change.
 * @property {number} date - Date the change was done in Unix time.
 * @property {ChatMember} old_chat_member - Previous information about the chat member.
 * @property {ChatMember} new_chat_member - New information about the chat member.
 * @property {ChatInviteLink} [invite_link] - Chat invite link, which was used by the user to join the chat.
 * @property {boolean} [via_chat_folder_invite_link] - True, if the user joined the chat via a chat folder invite link.
 */

/**
 * join request sent to a chat.
 * @typedef {Object} ChatJoinRequest
 * @property {Chat} chat - Chat to which the request was sent.
 * @property {User} from - User that sent the join request.
 * @property {number} user_chat_id - Identifier of a private chat with the user who sent the join request.
 * @property {number} date - Date the request was sent in Unix time.
 * @property {string} [bio] - Bio of the user.
 * @property {ChatInviteLink} [invite_link] - Chat invite link that was used by the user to send the join request.
 */

/**
 * an incoming callback query from a callback button in an inline keyboard.
 * @typedef {Object} CallbackQuery
 * @property {string} id - Unique identifier for this query
 * @property {User} from - Sender
 * @property {MaybeInaccessibleMessage} [message] - Message sent by the bot with the callback button that originated the query
 * @property {string} [inline_message_id] - Identifier of the message sent via the bot in inline mode, that originated the query.
 * @property {string} chat_instance - Global identifier, uniquely corresponding to the chat.
 * @property {string} [data] - Data associated with the callback button.
 * @property {string} [game_short_name] - Short name of a Game to be returned, serves as the unique identifier for the game.
 */

/**
 * contains information about an incoming shipping query.
 * @typedef {Object} ShippingQuery
 * @property {string} id - Unique query identifier.
 * @property {User} from - User who sent the query.
 * @property {string} invoice_payload - Bot specified invoice payload.
 * @property {ShippingAddress} shipping_address - User specified shipping address.
 */

/**
 * contains information about an incoming pre-checkout query.
 * @typedef {Object} PreCheckoutQuery
 * @property {string} id - Unique query identifier.
 * @property {User} from - User who sent the query.
 * @property {string} currency - Three-letter ISO 4217 currency code.
 * @property {number} total_amount - Total price in the smallest units of the currency (integer, not float/double).
 * @property {string} invoice_payload - Bot specified invoice payload.
 * @property {string} [shipping_option_id] - Identifier of the shipping option chosen by the user.
 * @property {OrderInfo} [order_info] - Order information provided by the user.
 */

/**
 * a change of a reaction on a message performed by a user.
 * @typedef {Object} MessageReactionUpdated
 * @property {Chat} chat - The chat containing the message the user reacted to.
 * @property {number} message_id - Unique identifier of the message inside the chat.
 * @property {User} [user] - The user that changed the reaction, if the user isn't anonymous.
 * @property {Chat} [actor_chat] - The chat on behalf of which the reaction was changed, if the user is anonymous.
 * @property {number} date - Date of the change in Unix time.
 * @property {Array.<ReactionType>} old_reaction - Previous list of reaction types that were set by the user.
 * @property {Array.<ReactionType>} new_reaction - New list of reaction types that have been set by the user.
 */

/**
 * reaction changes on a message with anonymous reactions.
 * @typedef {Object} MessageReactionCountUpdated
 * @property {Chat} chat - The chat containing the message.
 * @property {number} message_id - Unique message identifier inside the chat.
 * @property {number} date - Date of the change in Unix time.
 * @property {Array.<ReactionCount>} reactions - List of reactions that are present on the message.
 */

/**
 * an incoming inline query.
 * @typedef {Object} InlineQuery
 * @property {string} id - Unique identifier for this query.
 * @property {User} from - Sender.
 * @property {string} query - Text of the query. up to 256 characters.
 * @property {string} offset - Offset of the results to be returned, can be controlled by the bot.
 * @property {string} [chat_type] - Type of the chat from which the inline query was sent.
 * @property {Location} [location] - Sender location, only for bots that request user location.
 */

/**
 * a result of an inline query that was chosen by the user and sent to their chat partner.
 * @typedef {Object} ChosenInlineResult
 * @property {string} result_id - The unique identifier for the result that was chosen.
 * @property {User} from - The user that chose the result.
 * @property {Location} [location] - Sender location, only for bots that require user location.
 * @property {string} [inline_message_id] - Identifier of the sent inline message.
 * @property {string} query - The query that was used to obtain the result.
 */

/**
 * a message
 * @typedef {Object} Message
 * @property {number} message_id - Unique message identifier inside this chat.
 * @property {number} [message_thread_id] - Unique identifier of a message thread to which the message belongs; for supergroups only.
 * @property {User} [from] - Sender of the message; empty for messages sent to channels. For backward compatibility.
 * @property {Chat} [sender_chat] - Sender of the message, sent on behalf of a chat.
 * @property {number} [sender_boost_count] - If the sender of the message boosted the chat.
 * @property {number} date - Date the message was sent in Unix time.
 * @property {Chat} chat - Chat the message belongs to.
 * @property {MessageOrigin} [forward_origin] - Information about the original message for forwarded messages.
 * @property {boolean} [is_topic_message] - True, if the message is sent to a forum topic.
 * @property {boolean} [is_automatic_forward] - True, if the message was automatically forwarded to the connected discussion group.
 * @property {Message} [reply_to_message] - For replies in the same chat and message thread, the original message.
 * @property {ExternalReplyInfo} [external_reply] - Information about the message that is being replied to.
 * @property {TextQuote} [quote] - For replies that quote part of the original message.
 * @property {Story} [reply_to_story] - For replies to a story, the original story.
 * @property {User} [via_bot] - Bot through which the message was sent.
 * @property {number} [edit_date] - Date the message was last edited in Unix time.
 * @property {boolean} [has_protected_content] - True, if the message can't be forwarded.
 * @property {string} [media_group_id] - The unique identifier of a media message group this message belongs to.
 * @property {string} [author_signature] - Signature of the post author for messages in channels.
 * @property {string} [text] - For text messages, the actual UTF-8 text of the message.
 * @property {Array.<MessageEntity>} [entities] - For text messages, special entities like usernames, URLs, bot commands, etc.
 * @property {LinkPreviewOptions} [link_preview_options] - Options used for link preview generation for the message.
 * @property {Animation} [animation] - Message is an animation, information about the animation.
 * @property {Audio} [audio] - Message is an audio file, information about the file.
 * @property {Document} [document] - Message is a general file, information about the file.
 * @property {Array.<PhotoSize>} [photo] - Message is a photo, available sizes of the photo.
 * @property {Sticker} [sticker] - Message is a sticker, information about the sticker.
 * @property {Story} [story] - Message is a forwarded story.
 * @property {Video} [video] - Message is a video, information about the video.
 * @property {VideoNote} [video_note] - Message is a video note, information about the video message.
 * @property {Voice} [voice] - Message is a voice message, information about the file.
 * @property {string} [caption] - Caption for the animation, audio, document, photo, video or voice.
 * @property {Array.<MessageEntity>} [caption_entities] - For messages with a caption, special entities like usernames, URLs, bot commands, etc.
 * @property {boolean} [has_media_spoiler] - True, if the message media is covered by a spoiler animation.
 * @property {Contact} [contact] - Message is a shared contact, information about the contact.
 * @property {Dice} [dice] - Message is a dice with random value.
 * @property {Game} [game] - Message is a game, information about the game.
 * @property {Poll} [poll] - Message is a native poll, information about the poll.
 * @property {Venue} [venue] - Message is a venue, information about the venue.
 * @property {Location} [location] - Message is a shared location, information about the location.
 * @property {Array.<User>} [new_chat_members] - New members that were added to the group or supergroup and information about them.
 * @property {User} [left_chat_member] - A member was removed from the group, information about them
 * @property {string} [new_chat_title] - A chat title was changed to this value.
 * @property {Array.<PhotoSize>} [new_chat_photo] - A chat photo was change to this value.
 * @property {boolean} [delete_chat_photo] - Service message: the chat photo was deleted.
 * @property {boolean} [group_chat_created] - Service message: the group has been created.
 * @property {boolean} [supergroup_chat_created] - Service message: the supergroup has been created.
 * @property {boolean} [channel_chat_created] - Service message: the channel has been created.
 * @property {MessageAutoDeleteTimerChanged} [message_auto_delete_timer_changed] - Service message: auto-delete timer settings changed in the chat.
 * @property {number} [migrate_to_chat_id] - The group has been migrated to a supergroup with the specified identifier.
 * @property {number} [migrate_from_chat_id] - The supergroup has been migrated from a group with the specified identifier.
 * @property {MaybeInaccessibleMessage} [pinned_message] - Specified message was pinned.
 * @property {Invoice} [invoice] - Message is an invoice for a payment, information about the invoice.
 * @property {SuccessfulPayment} [successful_payment] - Message is a service message about a successful payment.
 * @property {UsersShared} [users_shared] - Service message: users were shared with the bot.
 * @property {ChatShared} [chat_shared] - Service message: a chat was shared with the bot.
 * @property {string} [connected_website] - The domain name of the website on which the user has logged in.
 * @property {WriteAccessAllowed} [write_access_allowed] - the user allowed the bot to write messages after adding it to the attachment.
 * @property {PassportData} [passport_data] - Telegram Passport data
 * @property {ProximityAlertTriggered} [proximity_alert_triggered] - A user in the chat triggered user's proximity alert while sharing Live Location.
 * @property {ChatBoostAdded} [boost_added] - Service message: user boosted the chat.
 * @property {ForumTopicCreated} [forum_topic_created] - Service message: forum topic created.
 * @property {ForumTopicEdited} [forum_topic_edited] - Service message: forum topic edited.
 * @property {ForumTopicClosed} [forum_topic_closed] - Service message: forum topic closed.
 * @property {ForumTopicReopened} [forum_topic_reopened] - Service message: forum topic reopened.
 * @property {GeneralForumTopicHidden} [general_forum_topic_hidden] - Service message: the 'General' forum topic hidden.
 * @property {GeneralForumTopicUnhidden} [general_forum_topic_unhidden] - Service message: the 'General' forum topic unhidden.
 * @property {GiveawayCreated} [giveaway_created] - Service message: a scheduled giveaway was created.
 * @property {Giveaway} [giveaway] - The message is a scheduled giveaway message.
 * @property {GiveawayWinners} [giveaway_winners] - A giveaway with public winners was completed.
 * @property {GiveawayCompleted} [giveaway_completed] - Service message: a giveaway without public winners was completed.
 * @property {VideoChatScheduled} [video_chat_scheduled] - Service message: video chat scheduled.
 * @property {VideoChatStarted} [video_chat_started] - Service message: video chat started.
 * @property {VideoChatEnded} [video_chat_ended] - Service message: video chat ended.
 * @property {VideoChatParticipantsInvited} [video_chat_participants_invited] - Service message: new participants invited to a video chat.
 * @property {WebAppData} [web_app_data] - Service message: data sent by a Web App.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
 */

/**
 * Telegram user or bot.
 * @typedef {Object} User
 * @property {number} id - Unique identifier for this user or bot.
 * @property {boolean} is_bot - True if the user is a bot.
 * @property {string} first_name - User's or bot's first name.
 * @property {string} [last_name] - User's or bot's last name.
 * @property {string} [username] - User's or bot's username.
 * @property {string} [language_code] - IETF language tag of the user's language.
 * @property {boolean} [is_premium] - True if the user has Telegram Premium.
 * @property {boolean} [added_to_attachment_menu] - True if the bot is added to the attachment menu.
 * @property {boolean} [can_join_groups] - True if the bot can be invited to groups.
 * @property {boolean} [can_read_all_group_messages] - True if privacy mode is disabled for the bot.
 * @property {boolean} [supports_inline_queries] - True if the bot supports inline queries.
 */

/**
 * a chat.
 * @typedef {Object} Chat
 * @property {number} id - Unique identifier for this chat.
 * @property {string} type - Type of chat, can be either "private", "group", "supergroup" or "channel".
 * @property {string} title - Title, for supergroups, channels and group chats.
 * @property {string} [username] - Username, for private chats, supergroups and channels if available.
 * @property {string} [first_name] - First name of the other party in a private chat.
 * @property {string} [last_name] - Last name of the other party in a private chat.
 * @property {boolean} [is_forum] - True, if the supergroup chat is a forum.
 * @property {ChatPhoto} [photo] - Chat photo. Returned only in getChat.
 * @property {Array.<string>} [active_usernames] - f non-empty, the list of all active chat usernames.
 * @property {Array.<ReactionType>} [available_reactions] - List of available reactions allowed in the chat.
 * @property {number} [accent_color_id] - Identifier of the accent color for the chat name and backgrounds of the chat photo.
 * @property {string} [background_custom_emoji_id] - Custom emoji identifier of emoji chosen by the chat for the reply header and link preview background.
 * @property {number} [profile_accent_color_id] - Identifier of the accent color for the chat's profile background.
 * @property {string} [profile_background_custom_emoji_id] - ustom emoji identifier of the emoji chosen by the chat for its profile background.
 * @property {string} [emoji_status_custom_emoji_id] - Custom emoji identifier of the emoji status of the chat or the other party in a private chat.
 * @property {number} [emoji_status_expiration_date] - Expiration date of the emoji status of the chat or the other party in a private chat.
 * @property {string} [bio] - Bio of the other party in a private chat. Returned only in getChat.
 * @property {boolean} [has_private_forwards] - True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user.
 * @property {boolean} [has_restricted_voice_and_video_messages] - True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat.
 * @property {boolean} [join_to_send_messages] - True, if users need to join the supergroup before they can send messages.
 * @property {boolean} [join_by_request] - True, if all users directly joining the supergroup need to be approved by supergroup administrators.
 * @property {string} [description] - Description, for groups, supergroups and channel chats. Returned only in getChat.
 * @property {string} [invite_link] - Primary invite link, for groups, supergroups and channel chats.
 * @property {Message} [pinned_message] - The most recent pinned message.
 * @property {ChatPermissions} [permissions] - Default chat member permissions, for groups and supergroups.
 * @property {number} [slow_mode_delay] - For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user.
 * @property {number} [unrestrict_boost_count] - For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions.
 * @property {number} [message_auto_delete_time] - The time after which all messages sent to the chat will be automatically deleted.
 * @property {boolean} [has_aggressive_anti_spam_enabled] - True, if aggressive anti-spam checks are enabled in the supergroup.
 * @property {boolean} [has_hidden_members] - True, if non-administrators can only get the list of bots and administrators in the chat.
 * @property {boolean} [has_protected_content] - True, if messages from the chat can't be forwarded to other chats.
 * @property {boolean} [has_visible_history] - True, if new chat members will have access to old messages.
 * @property {string} [sticker_set_name] - For supergroups, name of group sticker set. Returned only in getChat.
 * @property {boolean} [can_set_sticker_set] - True, if the bot can change the group sticker set. Returned only in getChat.
 * @property {string} [custom_emoji_sticker_set_name] - For supergroups, the name of the group's custom emoji sticker set.
 * @property {number} [linked_chat_id] - Unique identifier for the linked chat, i.e.
 * @property {ChatLocation} [location] - For supergroups, the location to which the supergroup is connected. Returned only in getChat.
 */

/**
 * the origin of a message. It can be one of.
 * @typedef {Object} MessageOrigin
 * @property {string} type - Type of the message origin, always "user".
 * @property {number} date - Date the message was sent originally in Unix time.
 * @property {User} sender_user - User that sent the message originally.
 * @property {string} sender_user_name - Name of the user that sent the message originally.
 * @property {Chat} sender_chat - Chat that sent the message originally.
 * @property {string} [author_signature] - Signature of the original post author.
 * @property {Chat} chat - Channel chat to which the message was originally sent.
 * @property {number} message_id - Unique message identifier inside the chat.
 */

/**
 * contains information about a message that is being replied to, which may come from another chat or forum topic.
 * @typedef {Object} ExternalReplyInfo
 * @property {MessageOrigin} origin - Origin of the message replied to by the given message
 * @property {Chat} [chat] - Chat the original message belongs to.
 * @property {number} [message_id] - Unique message identifier inside the original chat.
 * @property {LinkPreviewOptions} [link_preview_options] - Options used for link preview generation for the original message, if it is a text message.
 * @property {Animation} [animation] - Message is an animation, information about the animation.
 * @property {Audio} [audio] - Message is an audio file, information about the file.
 * @property {Document} [document] - Message is a general file, information about the file.
 * @property {Array.<PhotoSize>} [photo] - Message is a photo, available sizes of the photo.
 * @property {Sticker} [sticker] - Message is a sticker, information about the sticker.
 * @property {Story} [story] - Message is a forwarded story.
 * @property {Video} [video] - Message is a video, information about the video.
 * @property {VideoNote} [video_note] - Message is a video note, information about the video message.
 * @property {Voice} [voice] - Message is a voice message, information about the file.
 * @property {boolean} [has_media_spoiler] - True, if the message media is covered by a spoiler animation.
 * @property {Contact} [contact] - Message is a shared contact, information about the contact.
 * @property {Dice} [dice] - Message is a dice with random value.
 * @property {Game} [game] - Message is a game, information about the game.
 * @property {Giveaway} [giveaway] - Message is a scheduled giveaway, information about the giveaway.
 * @property {GiveawayWinners} [giveaway_winners] - A giveaway with public winners was completed.
 * @property {Invoice} [invoice] - Message is an invoice for a payment, information about the invoice.
 * @property {Location} [location] - Message is a shared location, information about the location.
 * @property {Poll} [poll] - Message is a native poll, information about the poll.
 * @property {Venue} [venue] - Message is a venue, information about the venue.
 */

/**
 * contains information about the quoted part of a message that is replied to by the given message.
 * @typedef {Object} TextQuote
 * @property {string} text - Text of the quoted part of a message that is replied to by the given message.
 * @property {Array.<MessageEntity>} [entities] - Special entities that appear in the quote.
 * @property {number} position - Approximate quote position in the original message in UTF-16 code units as specified by the sender.
 * @property {boolean} [is_manual] - True, if the quote was chosen manually by the message sender.
 */

/**
 * one special entity in a text message.
 * @typedef {Object} MessageEntity
 * @property {string} type - Type of the entity.
 * @property {number} offset - Offset in UTF-16 code units to the start of the entity.
 * @property {number} length - Length of the entity in UTF-16 code units.
 * @property {string} [url] - For "text_link" only, URL that will be opened after user taps on the text.
 * @property {User} [user] - For "text_mention" only, the mentioned user.
 * @property {string} [language] - For "pre" only, the programming language of the entity text.
 * @property {string} [custom_emoji_id] - For "custom_emoji" only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the .
 */

/**
 * the options used for link preview generation.
 * @typedef {Object} LinkPreviewOptions
 * @property {boolean} [is_disabled] - True, if the link preview is disabled.
 * @property {string} [url] - URL to use for the link preview.
 * @property {boolean} [prefer_small_media] - True, if the media in the link preview is supposed to be shrunk.
 * @property {boolean} [prefer_large_media] - rue, if the media in the link preview is supposed to be enlarged.
 * @property {boolean} [show_above_text] - True, if the link preview must be shown above the message text.
 */

/**
 * an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 * @typedef {Object} Animation
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} width - Video width as defined by sender.
 * @property {number} height - Video height as defined by sender.
 * @property {number} duration - Duration of the video in seconds as defined by sender.
 * @property {PhotoSize} [thumbnail] - Animation thumbnail as defined by sender.
 * @property {string} [file_name] - Original animation filename as defined by sender.
 * @property {string} [mime_type] - MIME type of the file as defined by sender.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * an audio file to be treated as music by the Telegram clients.
 * @typedef {Object} Audio
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {number} duration - Duration of the audio in seconds as defined by sender.
 * @property {string} [performer] - Performer of the audio as defined by sender or by audio tags.
 * @property {string} [title] - Title of the audio as defined by sender or by audio tags.
 * @property {string} [file_name] - Original filename as defined by sender.
 * @property {string} [mime_type] - MIME type of the file as defined by sender.
 * @property {number} [file_size] - File size in bytes.
 * @property {PhotoSize} [thumbnail] - Thumbnail of the album cover to which the music file belongs
 */

/**
 * a general file (as opposed to photos, voice messages and audio files).
 * @typedef {Object} Document
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {PhotoSize} [thumbnail] - Document thumbnail as defined by sender.
 * @property {string} [file_name] - Original filename as defined by sender.
 * @property {string} [mime_type] - MIME type of the file as defined by sender.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * one size of a photo or a file / sticker thumbnail.
 * @typedef {Object} PhotoSize
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {number} width - Photo width.
 * @property {number} height - Photo height.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * a sticker.
 * @typedef {Object} Sticker
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {string} type - Type of the sticker, currently one of "regular", "mask", "custom_emoji".
 * @property {number} width - Sticker width.
 * @property {number} height - Sticker height.
 * @property {boolean} is_animated - True, if the sticker is animated.
 * @property {boolean} is_video - True, if the sticker is a video sticker.
 * @property {PhotoSize} [thumbnail] - Sticker thumbnail in the .WEBP or .JPG format.
 * @property {string} [emoji] - Emoji associated with the sticker.
 * @property {string} [set_name] - Name of the sticker set to which the sticker belongs.
 * @property {File} [premium_animation] - For premium regular stickers, premium animation for the sticker.
 * @property {MaskPosition} [mask_position] - For mask stickers, the position where the mask should be placed.
 * @property {string} [custom_emoji_id] - For custom emoji stickers, unique identifier of the custom emoji.
 * @property {boolean} [needs_repainting] - True, if the sticker must be repainted to a text color in messages.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * a video file.
 * @typedef {Object} Video
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {number} width - Video width as defined by sender.
 * @property {number} height - Video height as defined by sender.
 * @property {number} duration - Duration of the video in seconds as defined by sender.
 * @property {PhotoSize} [thumbnail] - Video thumbnail.
 * @property {string} [file_name] - Original filename as defined by sender.
 * @property {string} [mime_type] - MIME type of the file as defined by sender.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * a video message (available in Telegram apps as of v.4.0).
 * @typedef {Object} VideoNote
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {number} length - Video width and height (diameter of the video message) as defined by sender.
 * @property {number} duration - Duration of the video in seconds as defined by sender.
 * @property {PhotoSize} [thumbnail] - Video thumbnail.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * a voice note.
 * @typedef {Object} Voice
 * @property {string} file_id - Identifier for this file, which can be used to download or reuse the file.
 * @property {string} file_unique_id - Unique identifier for this file, which is supposed to be the same over time and for different bots.
 * @property {number} duration - Duration of the audio in seconds as defined by sender.
 * @property {string} [mime_type] - MIME type of the file as defined by sender.
 * @property {number} [file_size] - File size in bytes.
 */

/**
 * a phone contact.
 * @typedef {Object} Contact
 * @property {string} phone_number - Contact's phone number
 * @property {string} first_name - Contact's first name
 * @property {string} [last_name] - Contact's last name
 * @property {number} [user_id] - Contact's user identifier in Telegram.
 * @property {string} [vcard] - Additional data about the contact in the form of a vCard
 */

/**
 * an animated emoji that displays a random value.
 * @typedef {Object} Dice
 * @property {string} emoji - Emoji on which the dice throw animation is based
 * @property {number} value - Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji
 */

/**
 * a game.
 * @typedef {Object} Game
 * @property {string} title - Title of the game.
 * @property {string} description - Description of the game.
 * @property {Array.<PhotoSize>} photo - Photo that will be displayed in the game message in chats.
 * @property {string} [text] - Brief description of the game or high scores included in the game message.
 * @property {Array.<MessageEntity>} [text_entities] - Special entities that appear in text, such as usernames, URLs, bot commands, etc.
 * @property {Animation} [animation] - Animation that will be displayed in the game message in chats. Upload via BotFather.
 */

/**
 * contains information about a poll.
 * @typedef {Object} Poll
 * @property {string} id - Unique poll identifier.
 * @property {string} question - Poll question, 1-300 characters.
 * @property {Array.<PollOption>} options - List of poll options.
 * @property {number} total_voter_count - Total number of users that voted in the poll.
 * @property {boolean} is_closed - True, if the poll is closed.
 * @property {boolean} is_anonymous - True, if the poll is anonymous.
 * @property {string} type - Poll type, currently can be "regular" or "quiz".
 * @property {boolean} allows_multiple_answers - rue, if the poll allows multiple answers.
 * @property {number} [correct_option_id] - 0-based identifier of the correct answer option.
 * @property {string} [explanation] - Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll.
 * @property {Array.<MessageEntity>} [explanation_entities] - Special entities like usernames, URLs, bot commands, etc.
 * @property {number} [open_period] - Amount of time in seconds the poll will be active after creation.
 * @property {number} [close_date] - Point in time (Unix timestamp) when the poll will be automatically closed.
 */

/**
 * @typedef {Object} Venue
 * @property {Location} location
 * @property {string} title
 * @property {string} address
 * @property {string} [foursquare_id]
 * @property {string} [foursquare_type]
 * @property {string} [google_place_id]
 * @property {string} [google_place_type]
 */

/**
 * @typedef {Object} Location
 * @property {number} longitude
 * @property {number} latitude
 * @property {number} [horizontal_accuracy]
 * @property {number} [live_period]
 * @property {number} [heading]
 * @property {number} [proximity_alert_radius]
 */

/**
 * @typedef {Object} MessageAutoDeleteTimerChanged
 * @property {number} message_auto_delete_time
 */

/**
 * @typedef {Object} MaybeInaccessibleMessage
 * @property {Message} [message]
 */

/**
 * @typedef {Object} Invoice
 * @property {string} title
 * @property {string} description
 * @property {string} start_parameter
 * @property {string} currency
 * @property {number} total_amount
 */

/**
 * @typedef {Object} SuccessfulPayment
 * @property {string} currency
 * @property {number} total_amount
 * @property {string} invoice_payload
 * @property {string} shipping_option_id
 * @property {OrderInfo} order_info
 * @property {string} telegram_payment_charge_id
 * @property {string} provider_payment_charge_id
 */

/**
 * @typedef {Object} UsersShared
 * @property {number} request_id
 * @property {Array.<number>} user_ids
 */

/**
 * @typedef {Object} ChatShared
 * @property {number} request_id
 * @property {number} chat_id
 */

/**
 * @typedef {Object} WriteAccessAllowed
 * @property {boolean} from_request
 * @property {string} web_app_name
 * @property {boolean} from_attachment_menu
 */

/**
 * @typedef {Object} PassportData
 * @property {Array.<EncryptedPassportElement>} data
 * @property {EncryptedCredentials} credentials
 */

/**
 * @typedef {Object} ProximityAlertTriggered
 * @property {User} traveler
 * @property {User} watcher
 * @property {number} distance
 */

/**
 * @typedef {Object} ForumTopicCreated
 * @property {string} name
 * @property {number} icon_color
 * @property {string} icon_custom_emoji_id
 */

/**
 * @typedef {Object} ForumTopicEdited
 * @property {string} name
 * @property {string} icon_custom_emoji_id
 */

/**
 * @typedef {Object} Giveaway
 * @property {Array.<Chat>} chats
 * @property {number} winners_selection_date
 * @property {number} winner_count
 * @property {boolean} [only_new_members]
 * @property {boolean} [has_public_winners]
 * @property {string} [prize_description]
 * @property {Array.<string>} [country_codes]
 * @property {number} [premium_subscription_month_count]
 */

/**
 * @typedef {Object} GiveawayWinners
 * @property {Chat} chat
 * @property {number} giveaway_message_id
 * @property {number} winners_selection_date
 * @property {number} winner_count
 * @property {Array.<User>} winners
 * @property {number} [additional_chat_count]
 * @property {number} [premium_subscription_month_count]
 * @property {number} [unclaimed_prize_count]
 * @property {boolean} [only_new_members]
 * @property {boolean} [was_refunded]
 * @property {string} [prize_description]
 */

/**
 * @typedef {Object} GiveawayCompleted
 * @property {number} winner_count
 * @property {number} [unclaimed_prize_count]
 * @property {Message} [giveaway_message]
 */

/**
 * @typedef {Object} VideoChatScheduled
 * @property {number} start_date
 */

/**
 * @typedef {Object} VideoChatEnded
 * @property {number} duration
 */

/**
 * @typedef {Object} VideoChatParticipantsInvited
 * @property {Array.<User>} users
 */

/**
 * @typedef {Object} WebAppData
 * @property {string} data
 * @property {string} button_text
 */

/**
 * @typedef {Object} InlineKeyboardMarkup
 * @property {Array.<Array.<InlineKeyboardButton>>} inline_keyboard
 */

/**
 * @typedef {Object} InlineKeyboardButton
 * @property {string} text
 * @property {string} [url]
 * @property {string} [callback_data]
 * @property {WebAppInfo} [web_app]
 * @property {LoginUrl} [login_url]
 * @property {string} [switch_inline_query]
 * @property {string} [switch_inline_query_current_chat]
 * @property {SwitchInlineQueryChosenChat} [switch_inline_query_chosen_chat]
 * @property {CallbackGame} [callback_game]
 * @property {boolean} [pay]
 */

/**
 * @typedef {Object} ReplyKeyboardRemove
 * @property {true} remove_keyboard
 * @property {boolean} [selective]
 */

/**
 * @typedef {Object} KeyboardButton
 * @property {string} text
 * @property {KeyboardButtonRequestUsers} [request_users]
 * @property {KeyboardButtonRequestChat} [request_chat]
 * @property {boolean} [request_contact]
 * @property {boolean} [request_location]
 * @property {KeyboardButtonPollType} [request_poll]
 * @property {WebAppInfo} [web_app]
 */

/**
 * @typedef {Object} ReplyKeyboardMarkup
 * @property {Array.<Array.<KeyboardButton>>} keyboard
 * @property {boolean} [is_persistent]
 * @property {boolean} [resize_keyboard]
 * @property {boolean} [one_time_keyboard]
 * @property {string} [input_field_placeholder]
 * @property {boolean} [selective]
 */

/**
 * @typedef {Object} PollOption
 * @property {string} text
 * @property {number} voter_count
 */

/**
 * @typedef {Object} UserProfilePhotos
 * @property {number} total_count
 * @property {Array<Array<PhotoSize>>} photos
 */

/**
 * @typedef {Object} File
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} file_size
 * @property {string} file_path
 */

/**
 * @typedef {Object} WebAppInfo
 * @property {string} url
 */

/**
 * @typedef {Object} KeyboardButtonRequestUsers
 * @property {number} request_id
 * @property {boolean} [user_is_bot]
 * @property {boolean} [user_is_premium]
 * @property {number} [max_quantity]
 */

/**
 * @typedef {Object} KeyboardButtonRequestChat
 * @property {number} request_id
 * @property {boolean} chat_is_channel
 * @property {boolean} [chat_is_forum]
 * @property {boolean} [chat_has_username]
 * @property {boolean} [chat_is_created]
 * @property {ChatAdministratorRights} [user_administrator_rights]
 * @property {ChatAdministratorRights} [bot_administrator_rights]
 * @property {boolean} [bot_is_member]
 */

/**
 * @typedef {Object} KeyboardButtonPollType
 * @property {string} type
 */

/**
 * @typedef {Object} LoginUrl
 * @property {string} url
 * @property {string} forward_text
 * @property {string} bot_username
 * @property {boolean} request_write_access
 */

/**
 * @typedef {Object} SwitchInlineQueryChosenChat
 * @property {string} query
 * @property {boolean} allow_user_chats
 * @property {boolean} allow_bot_chats
 * @property {boolean} allow_group_chats
 * @property {boolean} allow_channel_chats
 */

/**
 * @typedef {Object} ForceReply
 * @property {boolean} force_reply
 * @property {string} input_field_placeholder
 * @property {boolean} selective
 */

/**
 * @typedef {Object} ChatPhoto
 * @property {string} small_file_id
 * @property {string} small_file_unique_id
 * @property {string} big_file_id
 * @property {string} big_file_unique_id
 */

/**
 * @typedef {Object} ChatInviteLink
 * @property {string} invite_link
 * @property {User} creator
 * @property {boolean} creates_join_request
 * @property {boolean} is_primary
 * @property {boolean} is_revoked
 * @property {string} name
 * @property {number} expire_date
 * @property {number} member_limit
 * @property {number} pending_join_request_count
 */

/**
 * @typedef {Object} ChatAdministratorRights
 * @property {boolean} is_anonymous
 * @property {boolean} can_manage_chat
 * @property {boolean} can_delete_messages
 * @property {boolean} can_manage_video_chats
 * @property {boolean} can_restrict_members
 * @property {boolean} can_promote_members
 * @property {boolean} can_change_info
 * @property {boolean} can_invite_users
 * @property {boolean} can_post_messages
 * @property {boolean} can_edit_messages
 * @property {boolean} can_pin_messages
 * @property {boolean} can_post_stories
 * @property {boolean} can_edit_stories
 * @property {boolean} can_delete_stories
 * @property {boolean} can_manage_topics
 */

/**
 * @typedef {Object} ChatMember
 * @property {string} status
 * @property {User} user
 */

/**
 * @typedef {Object} ChatMemberOwner
 * @property {string} status
 * @property {User} user
 * @property {boolean} is_anonymous
 * @property {string} custom_title
 */

/**
 * @typedef {Object} ChatMemberAdministrator
 * @property {string} status
 * @property {User} user
 * @property {boolean} can_be_edited
 * @property {boolean} is_anonymous
 * @property {ChatAdministratorRights} rights
 * @property {string} custom_title
 */

/**
 * @typedef {Object} ChatMemberMember
 * @property {string} status
 * @property {User} user
 */

/**
 * @typedef {Object} ChatMemberRestricted
 * @property {string} status
 * @property {User} user
 * @property {boolean} is_member
 * @property {boolean} can_send_messages
 * @property {boolean} can_send_audios
 * @property {boolean} can_send_documents
 * @property {boolean} can_send_photos
 * @property {boolean} can_send_videos
 * @property {boolean} can_send_video_notes
 * @property {boolean} can_send_voice_notes
 * @property {boolean} can_send_polls
 * @property {boolean} can_send_other_messages
 * @property {boolean} can_add_web_page_previews
 * @property {boolean} can_change_info
 * @property {boolean} can_invite_users
 * @property {boolean} can_pin_messages
 * @property {boolean} can_manage_topics
 * @property {number} until_date
 */

/**
 * @typedef {Object} ChatMemberLeft
 * @property {string} status
 * @property {User} user
 */

/**
 * @typedef {Object} ChatMemberBanned
 * @property {string} status
 * @property {User} user
 * @property {number} until_date
 */

/**
 * @typedef {Object} ChatPermissions
 * @property {boolean} can_send_messages
 * @property {boolean} can_send_audios
 * @property {boolean} can_send_documents
 * @property {boolean} can_send_photos
 * @property {boolean} can_send_videos
 * @property {boolean} can_send_video_notes
 * @property {boolean} can_send_voice_notes
 * @property {boolean} can_send_polls
 * @property {boolean} can_send_other_messages
 * @property {boolean} can_add_web_page_previews
 * @property {boolean} can_change_info
 * @property {boolean} can_invite_users
 * @property {boolean} can_pin_messages
 * @property {boolean} can_manage_topics
 */

/**
 * @typedef {Object} ChatLocation
 * @property {Location} location
 * @property {string} address
 */

/**
 * @typedef {ReactionTypeEmoji|ReactionTypeCustomEmoji} ReactionType
 */

/**
 * @typedef {Object} ReactionTypeEmoji
 * @property {string} type
 * @property {string} emoji
 */

/**
 * @typedef {Object} ReactionTypeCustomEmoji
 * @property {string} type
 * @property {string} custom_emoji_id
 */

/**
 * @typedef {Object} ReactionCount
 * @property {ReactionType} type
 * @property {number} total_count
 */

/**
 * @typedef {Object} ForumTopic
 * @property {number} message_thread_id
 * @property {string} name
 * @property {number} icon_color
 * @property {string} icon_custom_emoji_id
 */

/**
 * @typedef {Object} BotCommand
 * @property {string} command
 * @property {string} description
 */

/**
 * @typedef {BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember} BotCommandScope
 */

/**
 * @typedef {Object} BotCommandScopeDefault
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeAllPrivateChats
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeAllGroupChats
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeAllChatAdministrators
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeChat
 * @property {string} type
 * @property {number|string} chat_id
 */

/**
 * @typedef {Object} BotCommandScopeChatAdministrators
 * @property {string} type
 * @property {(number|string)} chat_id
 */

/**
 * @typedef {Object} BotCommandScopeChatMember
 * @property {string} type
 * @property {(number|string)} chat_id
 * @property {number} user_id
 */

/**
 * @typedef {Object} BotName
 * @property {string} name
 */

/**
 * @typedef {Object} BotDescription
 * @property {string} description
 */

/**
 * @typedef {Object} BotShortDescription
 * @property {string} short_description
 */

/**
 * @typedef {MenuButtonCommands|MenuButtonWebApp|MenuButtonDefault} MenuButton
 */

/**
 * @typedef {Object} MenuButtonCommands
 * @property {string} type
 */

/**
 * @typedef {Object} MenuButtonWebApp
 * @property {string} type
 * @property {string} text
 * @property {WebAppInfo} web_app
 */

/**
 * @typedef {Object} MenuButtonDefault
 * @property {string} type
 */

/**
 * @typedef {ChatBoostSourcePremium|ChatBoostSourceGiftCode|ChatBoostSourceGiveaway} ChatBoostSource
 */

/**
 * @typedef {Object} ChatBoostSourcePremium
 * @property {string} source
 * @property {User} user
 */

/**
 * @typedef {Object} ChatBoostSourceGiftCode
 * @property {string} source
 * @property {User} user
 */

/**
 * @typedef {Object} ChatBoostSourceGiveaway
 * @property {string} source
 * @property {number} giveaway_message_id
 * @property {User} user
 * @property {boolean} is_unclaimed
 */

/**
 * @typedef {Object} ChatBoost
 * @property {string} boost_id
 * @property {number} add_date
 * @property {number} expiration_date
 * @property {ChatBoostSource} source
 */

/**
 * @typedef {Object} UserChatBoosts
 * @property {ChatBoost[]} boosts
 */

/**
 * @typedef {Object} ResponseParameters
 * @property {number} migrate_to_chat_id
 * @property {number} retry_after
 */

/**
 * @typedef {InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo} InputMedia
 */

/**
 * @typedef {Object} InputMediaPhoto
 * @property {string} type - Must be "photo".
 * @property {string} media - File to send.
 * @property {string} [caption] - Optional. Caption of the photo.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. Special entities in the caption.
 * @property {boolean} [has_spoiler] - Optional. True if photo is a spoiler.
 */

/**
 * @typedef {Object} InputMediaVideo
 * @property {string} type - Must be "video".
 * @property {string} media - File to send.
 * @property {InputFile|string} [thumbnail] - Optional. Thumbnail of the file.
 * @property {string} [caption] - Optional. Caption of the video.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. Special entities in the caption.
 * @property {number} [width] - Optional. Video width.
 * @property {number} [height] - Optional. Video height.
 * @property {number} [duration] - Optional. Video duration in seconds.
 * @property {boolean} [supports_streaming] - Optional. True if video is suitable for streaming.
 * @property {boolean} [has_spoiler] - Optional. True if video is a spoiler.
 */

/**
 * @typedef {Object} InputMediaAnimation
 * @property {string} type - Must be "animation".
 * @property {string} media - File to send.
 * @property {InputFile|string} [thumbnail] - Optional. Thumbnail of the file.
 * @property {string} [caption] - Optional. Caption of the animation.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. Special entities in the caption.
 * @property {number} [width] - Optional. Animation width.
 * @property {number} [height] - Optional. Animation height.
 * @property {number} [duration] - Optional. Animation duration in seconds.
 * @property {boolean} [has_spoiler] - Optional. True if animation is a spoiler.
 */

/**
 * @typedef InputMediaAudio
 * @type {object}
 * @property {string} type
 * @property {string} media
 * @property {InputFile|string} [thumbnail]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {number} [duration]
 * @property {string} [performer]
 * @property {string} [title]
 */

/**
 * @typedef InputMediaDocument
 * @type {object}
 * @property {string} type
 * @property {string} media
 * @property {InputFile|string} [thumbnail]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {boolean} [disable_content_type_detection]
 */

/**
 * @typedef Sticker
 * @type {object}
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {string} type
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_animated
 * @property {boolean} is_video
 * @property {PhotoSize} [thumbnail]
 * @property {string} [emoji]
 * @property {string} [set_name]
 * @property {File} [premium_animation]
 * @property {MaskPosition} [mask_position]
 * @property {string} [custom_emoji_id]
 * @property {boolean} [needs_repainting]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} StickerSet
 * @property {string} name - Sticker set name.
 * @property {string} title - Sticker set title.
 * @property {string} sticker_type - Type of stickers in the set.
 * @property {boolean} is_animated - True if the sticker set contains animated stickers.
 * @property {boolean} is_video - True if the sticker set contains video stickers.
 * @property {Sticker[]} stickers - List of all set stickers.
 * @property {PhotoSize} [thumbnail] - Optional. Sticker set thumbnail.
 */

/**
 * @typedef {Object} MaskPosition
 * @property {string} point - The part of the face relative to which the mask should be placed.
 * @property {number} x_shift - Shift by X-axis measured in widths of the mask scaled to the face size.
 * @property {number} y_shift - Shift by Y-axis measured in heights of the mask scaled to the face size.
 * @property {number} scale - Mask scaling coefficient.
 */

/**
 * @typedef {Object} InputSticker
 * @property {(InputFile|string)} sticker - The added sticker.
 * @property {string[]} emoji_list - List of 1-20 emoji associated with the sticker.
 * @property {MaskPosition} [mask_position] - Optional. Position where the mask should be placed on faces.
 * @property {string[]} [keywords] - Optional. List of 0-20 search keywords for the sticker.
 */

/**
 * @typedef {Object} InlineQueryResultsButton
 * @property {string} text - Label text on the button.
 * @property {WebAppInfo} [web_app] - Description of the Web App.
 * @property {string} [start_parameter] - Deep-linking parameter.
 */

/**
 * @typedef {InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice} InlineQueryResult
 */

/**
 * @typedef {Object} InlineQueryResultArticle
 * @property {string} type
 * @property {string} id
 * @property {string} title
 * @property {InputMessageContent} input_message_content
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {string} [url]
 * @property {boolean} [hide_url]
 * @property {string} [description]
 * @property {string} [thumbnail_url]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {Object} InlineQueryResultPhoto
 * @property {string} type
 * @property {string} id
 * @property {string} photo_url
 * @property {string} thumbnail_url
 * @property {number} [photo_width]
 * @property {number} [photo_height]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultGif
 * @property {string} type
 * @property {string} id
 * @property {string} gif_url
 * @property {number} [gif_width]
 * @property {number} [gif_height]
 * @property {number} [gif_duration]
 * @property {string} thumbnail_url
 * @property {string} [thumbnail_mime_type]
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultMpeg4Gif
 * @property {string} type
 * @property {string} id
 * @property {string} mpeg4_url
 * @property {number} [mpeg4_width]
 * @property {number} [mpeg4_height]
 * @property {number} [mpeg4_duration]
 * @property {string} thumbnail_url
 * @property {string} [thumbnail_mime_type]
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultVideo
 * @property {string} type
 * @property {string} id
 * @property {string} video_url
 * @property {string} mime_type
 * @property {string} thumbnail_url
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {number} [video_width]
 * @property {number} [video_height]
 * @property {number} [video_duration]
 * @property {string} [description]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultAudio
 * @property {string} type
 * @property {string} id
 * @property {string} audio_url
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {string} [performer]
 * @property {number} [audio_duration]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultVoice
 * @property {string} type
 * @property {string} id
 * @property {string} voice_url
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {number} [voice_duration]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultDocument
 * @property {string} type
 * @property {string} id
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {string} document_url
 * @property {string} mime_type
 * @property {string} [description]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 * @property {string} [thumbnail_url]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {Object} InlineQueryResultLocation
 * @property {string} type
 * @property {string} id
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} title
 * @property {number} [horizontal_accuracy]
 * @property {number} [live_period]
 * @property {number} [heading]
 * @property {number} [proximity_alert_radius]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 * @property {string} [thumbnail_url]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {Object} InlineQueryResultVenue
 * @property {string} type - Must be "venue".
 * @property {string} id - Unique identifier, 1-64 bytes.
 * @property {number} latitude - Latitude of the venue.
 * @property {number} longitude - Longitude of the venue.
 * @property {string} title - Title of the venue.
 * @property {string} address - Address of the venue.
 * @property {string} [foursquare_id] - Optional. Foursquare ID of the venue.
 * @property {string} [foursquare_type] - Optional. Foursquare type of the venue.
 * @property {string} [google_place_id] - Optional. Google Places ID of the venue.
 * @property {string} [google_place_type] - Optional. Google Places type of the venue.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content to be sent instead of the venue.
 * @property {string} [thumbnail_url] - Optional. URL of the result's thumbnail.
 * @property {number} [thumbnail_width] - Optional. Thumbnail width.
 * @property {number} [thumbnail_height] - Optional. Thumbnail height.
 */

/**
 * @typedef {Object} InlineQueryResultContact
 * @property {string} type - Must be "contact".
 * @property {string} id - Unique identifier, 1-64 bytes.
 * @property {string} phone_number - Contact's phone number.
 * @property {string} first_name - Contact's first name.
 * @property {string} [last_name] - Optional. Contact's last name.
 * @property {string} [vcard] - Optional. VCard of the contact.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content to be sent instead of the contact.
 * @property {string} [thumbnail_url] - Optional. URL of the result's thumbnail.
 * @property {number} [thumbnail_width] - Optional. Thumbnail width.
 * @property {number} [thumbnail_height] - Optional. Thumbnail height.
 */

/**
 * @typedef {Object} InlineQueryResultGame
 * @property {string} type - Must be "game".
 * @property {string} id - Unique identifier, 1-64 bytes.
 * @property {string} game_short_name - Short name of the game.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 */

/**
 * @typedef {Object} InlineQueryResultCachedPhoto
 * @property {string} type
 * @property {string} id
 * @property {string} photo_file_id
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultCachedGif
 * @property {string} type
 * @property {string} id
 * @property {string} gif_file_id
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultCachedMpeg4Gif
 * @property {string} type
 * @property {string} id
 * @property {string} mpeg4_file_id
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultCachedSticker
 * @property {string} type - The type of the result.
 * @property {string} id - Unique identifier for this result.
 * @property {string} sticker_file_id - A valid file identifier of the sticker.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Content of the message to be sent instead of the sticker.
 */

/**
 * @typedef {Object} InlineQueryResultCachedDocument
 * @property {string} type - The type of the result.
 * @property {string} id - Unique identifier for this result.
 * @property {string} title - Title for the result.
 * @property {string} document_file_id - A valid file identifier for the file.
 * @property {string} [description] - Short description of the result.
 * @property {string} [caption] - Caption of the document to be sent.
 * @property {string} [parse_mode] - Mode for parsing entities in the document caption.
 * @property {MessageEntity[]} [caption_entities] - List of special entities that appear in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Content of the message to be sent instead of the file.
 */

/**
 * @typedef {Object} InlineQueryResultCachedVideo
 * @property {string} type - The type of the result.
 * @property {string} id - Unique identifier for this result.
 * @property {string} video_file_id - A valid file identifier for the video file.
 * @property {string} title - Title for the result.
 * @property {string} [description] - Short description of the result.
 * @property {string} [caption] - Caption of the video to be sent.
 * @property {string} [parse_mode] - Mode for parsing entities in the video caption.
 * @property {MessageEntity[]} [caption_entities] - List of special entities that appear in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Content of the message to be sent instead of the video.
 */

/**
 * @typedef {Object} InlineQueryResultCachedVoice
 * @property {string} type - Must be "voice".
 * @property {string} id - Unique identifier for this result, 1-64 bytes.
 * @property {string} voice_file_id - A valid file identifier for the voice message.
 * @property {string} title - Voice message title.
 * @property {string} [caption] - Optional. Caption, 0-1024 characters after entities parsing.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. List of special entities in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content of the message to be sent instead of the voice message.
 */

/**
 * @typedef {Object} InlineQueryResultCachedAudio
 * @property {string} type - Must be "audio".
 * @property {string} id - Unique identifier for this result, 1-64 bytes.
 * @property {string} audio_file_id - A valid file identifier for the audio file.
 * @property {string} [caption] - Optional. Caption, 0-1024 characters after entities parsing.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. List of special entities in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content of the message to be sent instead of the audio.
 */

/**
 * @typedef {InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent} InputMessageContent
 */

/**
 * @typedef {Object} InputTextMessageContent - Represents the content of a text message for inline queries.
 * @property {string} message_text - Text of the message to be sent.
 * @property {string} [parse_mode] - Mode for parsing entities in the message text.
 * @property {MessageEntity[]} [entities] - List of special entities in message text.
 * @property {LinkPreviewOptions} [link_preview_options] - Link preview generation options.
 */

/**
 * @typedef {Object} InputLocationMessageContent - Represents the content of a location message for inline queries.
 * @property {number} latitude - Latitude of the location.
 * @property {number} longitude - Longitude of the location.
 * @property {number} [horizontal_accuracy] - The radius of uncertainty for the location.
 * @property {number} [live_period] - Period for which the location can be updated.
 * @property {number} [heading] - Direction in which the user is moving.
 * @property {number} [proximity_alert_radius] - Maximum distance for proximity alerts.
 */

/**
 * @typedef {Object} InputVenueMessageContent - Represents the content of a venue message for inline queries.
 * @property {number} latitude - Latitude of the venue.
 * @property {number} longitude - Longitude of the venue.
 * @property {string} title - Name of the venue.
 * @property {string} address - Address of the venue.
 * @property {string} [foursquare_id] - Foursquare identifier of the venue.
 * @property {string} [foursquare_type] - Foursquare type of the venue.
 * @property {string} [google_place_id] - Google Places identifier of the venue.
 * @property {string} [google_place_type] - Google Places type of the venue.
 */

/**
 * @typedef {Object} InputContactMessageContent
 * @property {string} phone_number - Contact's phone number.
 * @property {string} first_name - Contact's first name.
 * @property {string} [last_name] - Contact's last name.
 * @property {string} [vcard] - Additional data about the contact in the form of a vCard.
 */

/**
 * @typedef {Object} InputInvoiceMessageContent
 * @property {string} title - Product name.
 * @property {string} description - Product description.
 * @property {string} payload - Bot-defined invoice payload.
 * @property {string} provider_token - Payment provider token.
 * @property {string} currency - Three-letter ISO 4217 currency code.
 * @property {LabeledPrice[]} prices - Price breakdown.
 * @property {number} [max_tip_amount] - The maximum accepted amount for tips.
 * @property {number[]} [suggested_tip_amounts] - Suggested amounts of tip.
 * @property {string} [provider_data] - Data about the invoice for the payment provider.
 * @property {string} [photo_url] - URL of the product photo for the invoice.
 * @property {number} [photo_size] - Photo size in bytes.
 * @property {number} [photo_width] - Photo width.
 * @property {number} [photo_height] - Photo height.
 * @property {boolean} [need_name] - If the user's full name is required.
 * @property {boolean} [need_phone_number] - If the user's phone number is required.
 * @property {boolean} [need_email] - If the user's email address is required.
 * @property {boolean} [need_shipping_address] - If the user's shipping address is required.
 * @property {boolean} [send_phone_number_to_provider] - If the user's phone number should be sent to the provider.
 * @property {boolean} [send_email_to_provider] - If the user's email address should be sent to the provider.
 * @property {boolean} [is_flexible] - If the final price depends on the shipping method.
 */

/**
 * @typedef {Object} SentWebAppMessage
 * @property {string} [inline_message_id] - Identifier of the sent inline message.
 */

/**
 * @typedef {Object} answerShippingQuery
 * @property {string} shipping_query_id - Unique identifier for the query.
 * @property {boolean} ok - True if delivery is possible, False otherwise.
 * @property {ShippingOption[]} [shipping_options] - Available shipping options.
 * @property {string} [error_message] - Error message if delivery is not possible.
 */

/**
 * @typedef {Object} answerPreCheckoutQuery
 * @property {string} pre_checkout_query_id - Unique identifier for the query.
 * @property {boolean} ok - True if order can proceed, False otherwise.
 * @property {string} [error_message] - Error message if order cannot proceed.
 */

/**
 * @typedef {Object} LabeledPrice
 * @property {string} label - Portion label.
 * @property {number} amount - Price of the product in the smallest units of the currency.
 */

/**
 * @typedef {Object} ShippingAddress
 * @property {string} country_code - Two-letter ISO 3166-1 alpha-2 country code.
 * @property {string} state - State, if applicable.
 * @property {string} city - City.
 * @property {string} street_line1 - First line for the address.
 * @property {string} street_line2 - Second line for the address.
 * @property {string} post_code - Address post code.
 */

/**
 * @typedef {Object} OrderInfo
 * @property {string} [name] - User name.
 * @property {string} [phone_number] - User's phone number.
 * @property {string} [email] - User email.
 * @property {ShippingAddress} [shipping_address] - User shipping address.
 */

/**
 * @typedef {Object} ShippingOption
 * @property {string} id - Shipping option identifier.
 * @property {string} title - Option title.
 * @property {LabeledPrice[]} prices - List of price portions.
 */

/**
 * @typedef {Object} PassportData
 * @property {EncryptedPassportElement[]} data - Array with information about documents and other Telegram Passport elements.
 * @property {EncryptedCredentials} credentials - Encrypted credentials.
 */

/**
 * @typedef {Object} PassportFile
 * @property {string} file_id - Identifier for this file.
 * @property {string} file_unique_id - Unique identifier for this file.
 * @property {number} file_size - File size in bytes.
 * @property {number} file_date - Unix time when the file was uploaded.
 */

/**
 * @typedef {Object} EncryptedPassportElement
 * @property {string} type - Element type.
 * @property {string} [data] - Base64-encoded encrypted data.
 * @property {string} [phone_number] - User's verified phone number.
 * @property {string} [email] - User's verified email address.
 * @property {PassportFile[]} [files] - Array of encrypted files with documents.
 * @property {PassportFile} [front_side] - Encrypted file with the front side of the document.
 * @property {PassportFile} [reverse_side] - Encrypted file with the reverse side of the document.
 * @property {PassportFile} [selfie] - Encrypted file with the selfie of the user holding a document.
 * @property {PassportFile[]} [translation] - Array of encrypted files with translated versions of documents.
 * @property {string} hash - Base64-encoded element hash.
 */

/**
 * @typedef {Object} EncryptedCredentials
 * @property {string} data - Base64-encoded encrypted JSON-serialized data.
 * @property {string} hash - Base64-encoded data hash for authentication.
 * @property {string} secret - Base64-encoded secret for data decryption.
 */

/**
 * @typedef {Object} PassportElementErrorDataField
 * @property {string} source - Error source, must be 'data'.
 * @property {string} type - Section of the user's Telegram Passport which has the error.
 * @property {string} field_name - Name of the data field which has the error.
 * @property {string} data_hash - Base64-encoded data hash.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} PassportElementErrorFrontSide
 * @property {string} source - Error source, must be 'front_side'.
 * @property {string} type - Section of the user's Telegram Passport which has the issue.
 * @property {string} file_hash - Base64-encoded hash of the file with the front side.
 * @property {string} message - Error message.
 */

/**
 * @typedef {PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified} PassportElementError
 */

/**
 * @typedef {Object} PassportElementErrorReverseSide
 * @property {string} source
 * @property {string} type
 * @property {string} file_hash
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorSelfie
 * @property {string} source
 * @property {string} type
 * @property {string} file_hash
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorFile
 * @property {string} source
 * @property {string} type
 * @property {string} file_hash
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorFiles
 * @property {string} source
 * @property {string} type
 * @property {string[]} file_hashes
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorTranslationFile
 * @property {string} source - Error source, must be "translation_file".
 * @property {string} type - Type of Telegram Passport element with the issue.
 * @property {string} file_hash - Base64-encoded file hash.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} PassportElementErrorTranslationFiles
 * @property {string} source - Error source, must be "translation_files".
 * @property {string} type - Type of Telegram Passport element with the issue.
 * @property {string[]} file_hashes - List of base64-encoded file hashes.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} PassportElementErrorUnspecified
 * @property {string} source - Error source, must be "unspecified".
 * @property {string} type - Type of Telegram Passport element with the issue.
 * @property {string} element_hash - Base64-encoded element hash.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} Game
 * @property {string} title - Title of the game.
 * @property {string} description - Description of the game.
 * @property {PhotoSize[]} photo - Array of photos.
 * @property {string} [text] - Optional. Brief description or high scores.
 * @property {MessageEntity[]} [text_entities] - Optional. Special entities in the text.
 * @property {Animation} [animation] - Optional. Animation to be displayed in the message.
 */

/**
 * @typedef {Object} GameHighScore
 * @property {number} position - Position in high score table for the game.
 * @property {User} user - User.
 * @property {number} score - Score.
 */

/**
 * @typedef {Object} SheetOperations
 * @property {function(Array): void} appendRow - Adds a new row to the end of the sheet.
 * @property {function(): void} clear - Clears the entire sheet.
 * @property {function(number, number, number=, number=): void} clearByRange - Clears a specific range in the sheet.
 * @property {function(number, number): void} clearValue - Clears the content of a specific cell.
 * @property {function(string): Range} findOne - Finds the next cell matching the query.
 * @property {function(string): Range[]} findAll - Finds all cells matching the query.
 * @property {function(number): void} deleteColumn - Deletes a specific column.
 * @property {function(number, number): void} deleteColumns - Deletes a specific number of columns starting from the given index.
 * @property {function(number): void} deleteRow - Deletes a specific row.
 * @property {function(number, number): void} deleteRows - Deletes a specific number of rows starting from the given index.
 * @property {function(): Object[][]} getSheetData - Gets all data from the sheet.
 * @property {function(): number} getLastColumn - Gets the last column that has content.
 * @property {function(): number} getLastRow - Gets the last row that has content.
 * @property {function(number): void} insertColumnAfter - Inserts a column after the specified column index.
 * @property {function(number): void} insertColumnBefore - Inserts a column before the specified column index.
 * @property {function(number, number): void} insertColumns - Inserts the specified number of columns at the specified column index.
 * @property {function(number, number): void} insertColumnsAfter - Inserts the specified number of columns after a given position.
 * @property {function(number, number): void} insertColumnsBefore - Inserts the specified number of columns before a given position.
 * @property {function(number): void} insertRowAfter - Inserts a row after the specified row index.
 * @property {function(number): void} insertRowBefore - Inserts a row before the specified row index.
 * @property {function(number, number): void} insertRows - Inserts the specified number of rows at the specified row index.
 * @property {function(number, number): void} insertRowsAfter - Inserts the specified number of rows after a given position.
 * @property {function(number, number): void} insertRowsBefore - Inserts the specified number of rows before a given position.
 * @property {function(number, number): void} moveColumns - Moves a column from one position to another.
 * @property {function(number, number): void} moveRows - Moves a row from one position to another.
 * @property {function(string): void} setName - Sets the name of the sheet.
 * @property {function(number, boolean=): void} sortByColumn - Sorts the sheet based on the specified column.
 * @property {function(*, number, number, number=, number=): void} saveOne - Saves a single value to a specified cell.
 * @property {function(Array, number, number, number=, number=): void} saveMany - Saves a range of values to the specified area.
 * @property {function(number, number): *} getValue - Gets the value of a specific cell.
 * @property {function(number, number, number=, number=): Object[][]} getValues - Gets values from a specified range.
 */
